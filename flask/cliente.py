# cliente.py (Ejemplo de cliente de consola)

import requests
import json

BASE_URL = 'http://127.0.0.1:5000' # La dirección donde se ejecuta tu servidor Flask

def registro_usuario(usuario, contrasena):
    url = f"{BASE_URL}/registro"
    payload = {"usuario": usuario, "contrasena": contrasena}
    print(f"\n--- Intentando REGISTRAR a {usuario} ---")
    response = requests.post(url, json=payload)
    print(f"Estado: {response.status_code}")
    print("Respuesta:", response.json())

def iniciar_sesion(usuario, contrasena):
    url = f"{BASE_URL}/login"
    payload = {"usuario": usuario, "contrasena": contrasena}
    print(f"\n--- Intentando INICIAR SESIÓN con {usuario} ---")
    response = requests.post(url, json=payload)
    print(f"Estado: {response.status_code}")
    print("Respuesta:", response.json())
    return response.status_code == 200

def obtener_tareas():
    url = f"{BASE_URL}/tareas"
    print("\n--- Intentando OBTENER TAREAS (Recurso protegido) ---")
    response = requests.get(url)
    print(f"Estado: {response.status_code}")
    print("Respuesta (HTML):", response.text.strip())

if __name__ == "__main__":
    # Asegúrate de que servidor.py esté corriendo primero
    
    # 4. Construir un cliente en consola que interactúe con la API.
    
    # Prueba 1: Registro exitoso
    registro_usuario("user_prueba", "mipassseguro123")
    
    # Prueba 2: Registro duplicado
    registro_usuario("user_prueba", "otro_pass")

    # Prueba 3: Inicio de sesión exitoso
    iniciar_sesion("user_prueba", "mipassseguro123")
    
    # Prueba 4: Inicio de sesión fallido
    iniciar_sesion("user_prueba", "contrasena_incorrecta")
    
    # Prueba 5: Acceder al recurso
    obtener_tareas()