# servidor.py

import sqlite3
from flask import Flask, request, jsonify, g
from werkzeug.security import generate_password_hash, check_password_hash # Para hashing seguro

app = Flask(__name__)
DATABASE = 'tareas.db' # Nombre del archivo de la base de datos

# --- Funciones de la Base de Datos ---

def get_db():
    """Establece y devuelve la conexión a la base de datos para la solicitud actual."""
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        # Habilita que las filas se devuelvan como diccionarios
        db.row_factory = sqlite3.Row 
    return db

@app.teardown_appcontext
def close_connection(exception):
    """Cierra la conexión a la base de datos al finalizar la solicitud."""
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def init_db():
    """Crea la tabla de usuarios si no existe al iniciar el servidor."""
    with app.app_context():
        db = get_db()
        cursor = db.cursor()
        # La tabla 'usuarios' debe almacenar el hash de la contraseña, NO el texto plano.
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                usuario TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL
            )
        ''')
        db.commit()

# Inicializa la base de datos al inicio de la aplicación
init_db()

# --- Función Auxiliar de Autenticación ---

def get_user_by_credentials(username, password):
    """Busca un usuario y verifica su contraseña."""
    db = get_db()
    user = db.execute(
        'SELECT * FROM usuarios WHERE usuario = ?', (username,)
    ).fetchone()

    if user and check_password_hash(user['password_hash'], password):
        return user
    return None

@app.route('/registro', methods=['POST'])
def registro():
    data = request.get_json()
    usuario = data.get('usuario')
    contrasena = data.get('contrasena')

    if not usuario or not contrasena:
        return jsonify({"mensaje": "Faltan datos de usuario o contraseña"}), 400

    # 1. Implementar una API REST con endpoints funcionales.
    # 2. Utilizar autenticación básica con protección de contraseñas.
    
    # Hashing de la contraseña
    password_hash = generate_password_hash(contrasena) 
    
    db = get_db()
    try:
        db.execute(
            'INSERT INTO usuarios (usuario, password_hash) VALUES (?, ?)',
            (usuario, password_hash)
        )
        db.commit() # 3. Gestionar datos persistentes con SQLite.
        return jsonify({"mensaje": f"Usuario '{usuario}' registrado con éxito"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"mensaje": f"El usuario '{usuario}' ya existe"}), 409
    except Exception as e:
        return jsonify({"mensaje": f"Error en el registro: {e}"}), 500
    
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    usuario = data.get('usuario')
    contrasena = data.get('contrasena')

    user = get_user_by_credentials(usuario, contrasena)

    if user:
        # En una API real, aquí se generaría un token JWT. 
        # Para esta práctica, una simple confirmación es suficiente.
        return jsonify({"mensaje": f"Bienvenido, {user['usuario']}. Acceso concedido."}), 200
    else:
        return jsonify({"mensaje": "Credenciales inválidas"}), 401
    
@app.route('/tareas', methods=['GET'])
def gestion_tareas():
    # En una implementación REST real, aquí se verificaría un token de sesión/JWT 
    # enviado en los headers. Para el PFO, simplemente mostramos el HTML.
    
    html_content = """
    <!DOCTYPE html>
    <html lang="es">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <head><title>Bienvenida</title></head>
    <body>
        <h1>Bienvenido al Sistema de Gestión de Tareas</h1>
        <p>Este es el recurso protegido. ¡Podés empezar a gestionar tus tareas!</p>
    </body>
    </html>
    """
    return html_content, 200 # Muestre un html de bienvenida

if __name__ == '__main__':
    # Almacenar la base de datos en un entorno local es común para SQLite.
    # En producción, se usaría un sistema de base de datos más robusto o se gestionaría la conexión de otra forma.
    app.run(debug=True)
