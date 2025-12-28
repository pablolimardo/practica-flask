// Componentes decorativos graffiti/street art

export const SpraySplatter = ({ className = "w-32 h-32", color = "#00FFFF" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      {/* Splatter principal */}
      <circle cx="100" cy="100" r="40" fill={color} opacity="0.8"/>
      <circle cx="85" cy="85" r="25" fill={color} opacity="0.6"/>
      <circle cx="120" cy="110" r="20" fill={color} opacity="0.7"/>
      {/* Gotas pequeñas */}
      <circle cx="60" cy="70" r="8" fill={color} opacity="0.5"/>
      <circle cx="140" cy="80" r="6" fill={color} opacity="0.6"/>
      <circle cx="110" cy="140" r="10" fill={color} opacity="0.5"/>
      <circle cx="70" cy="130" r="5" fill={color} opacity="0.4"/>
      <circle cx="150" cy="120" r="7" fill={color} opacity="0.5"/>
      <circle cx="90" cy="50" r="4" fill={color} opacity="0.4"/>
      <circle cx="130" cy="60" r="5" fill={color} opacity="0.3"/>
    </g>
  </svg>
);

export const DuctTape = ({ className = "w-full h-8", rotation = 0 }) => (
  <div 
    className={`${className} relative`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-y-0 left-0 w-1 bg-gray-700"></div>
      <div className="absolute inset-y-0 right-0 w-1 bg-gray-700"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, transparent 0%, transparent 48%, rgba(0,0,0,0.1) 48%, rgba(0,0,0,0.1) 52%, transparent 52%)',
        backgroundSize: '4px 100%'
      }}></div>
    </div>
  </div>
);

export const TagArrow = ({ className = "w-16 h-16", color = "#FF00FF" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="spray-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
      </filter>
    </defs>
    <g stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#spray-blur)">
      <line x1="10" y1="50" x2="75" y2="50" />
      <line x1="75" y1="50" x2="60" y2="35" />
      <line x1="75" y1="50" x2="60" y2="65" />
    </g>
    <g stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <line x1="10" y1="50" x2="75" y2="50" />
      <line x1="75" y1="50" x2="60" y2="35" />
      <line x1="75" y1="50" x2="60" y2="65" />
    </g>
  </svg>
);

export const SprayStar = ({ className = "w-12 h-12", color = "#39FF14" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path 
      d="M50 10 L58 42 L90 50 L58 58 L50 90 L42 58 L10 50 L42 42 Z" 
      fill={color}
      filter="url(#glow)"
      opacity="0.8"
    />
  </svg>
);

export const DrippingText = ({ children, className = "", color = "#00FFFF" }) => (
  <div className={`relative inline-block ${className}`}>
    {children}
    <svg 
      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2" 
      width="20" 
      height="30" 
      viewBox="0 0 20 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M 10 0 Q 8 10, 9 15 Q 10 20, 9 25 Q 8 28, 10 30 Q 12 28, 11 25 Q 10 20, 11 15 Q 12 10, 10 0" 
        fill={color}
        opacity="0.7"
      />
    </svg>
  </div>
);

// Actualización de íconos con estilo stencil/spray (más simples y bold)
export const ScissorsStencil = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="12" />
    <circle cx="25" cy="75" r="12" />
    <polygon points="37,25 75,50 90,45 85,50 90,55 75,50 37,75" />
  </svg>
);

export const RazorStencil = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="35,30 50,15 90,55 75,70" />
    <rect x="20" y="35" width="20" height="45" rx="3" />
  </svg>
);

export const BeardStencil = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="35" rx="30" ry="22" />
    <path d="M 25 45 Q 20 65 30 75 Q 40 80 50 80 Q 60 80 70 75 Q 80 65 75 45 Z" />
  </svg>
);

export const SkullStencil = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="45" rx="28" ry="30" />
    <ellipse cx="38" cy="38" rx="7" ry="10" fill="#000"/>
    <ellipse cx="62" cy="38" rx="7" ry="10" fill="#000"/>
    <polygon points="45,55 45,63 50,68 55,63 55,55" fill="#000"/>
    <rect x="35" y="70" width="30" height="8" rx="2"/>
  </svg>
);

export const InkMachineStencil = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="38" y="15" width="24" height="35" rx="3" />
    <rect x="42" y="50" width="6" height="25" />
    <rect x="52" y="50" width="6" height="30" />
    <polygon points="50,80 46,88 54,88" />
  </svg>
);

export const CombStencil = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="35" width="60" height="25" rx="3" />
    <rect x="28" y="60" width="5" height="20" />
    <rect x="38" y="60" width="5" height="20" />
    <rect x="48" y="60" width="5" height="20" />
    <rect x="58" y="60" width="5" height="20" />
    <rect x="68" y="60" width="5" height="20" />
  </svg>
);
