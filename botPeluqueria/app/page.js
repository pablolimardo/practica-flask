'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  SpraySplatter, DuctTape, TagArrow, SprayStar, DrippingText,
  ScissorsStencil, RazorStencil, BeardStencil, SkullStencil, 
  InkMachineStencil, CombStencil
} from './components/GraffitiElements';

export default function Home() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { id: 1, name: 'CORTE CLÁSICO', price: '$8.000', duration: '30min', icon: ScissorsStencil, color: 'neon-cyan' },
    { id: 2, name: 'BARBA PREMIUM', price: '$5.000', duration: '20min', icon: BeardStencil, color: 'hot-magenta' },
    { id: 3, name: 'FULL SERVICE', price: '$12.000', duration: '45min', icon: RazorStencil, color: 'lime-spray', popular: true },
    { id: 4, name: 'NAVAJA CLÁSICA', price: '$6.000', duration: '30min', icon: CombStencil, color: 'orange-tag' },
  ];

  const tattoos = [
    { id: 1, style: 'BLACKWORK', price: 'DESDE $40K', color: 'white-stencil' },
    { id: 2, style: 'REALISMO', price: 'CONSULTAR', color: 'neon-cyan' },
    { id: 3, style: 'OLD SCHOOL', price: 'DESDE $35K', color: 'hot-magenta' },
    { id: 4, style: 'LETTERING', price: 'DESDE $25K', color: 'lime-spray' },
  ];

  return (
    <div className="min-h-screen bg-black-wall text-white selection:bg-neon-cyan selection:text-black overflow-x-hidden">
      
      {/* Hero Section - Graffiti Wall */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black-wall via-concrete to-black-wall">
        
        {/* Background brick texture */}
        <div className="absolute inset-0 opacity-20 bg-brick-wall bg-cover bg-center"></div>
        
        {/* Spray splatters decoration */}
        <div className="absolute top-10 left-10 opacity-30">
          <SpraySplatter className="w-40 h-40" color="#00FFFF" />
        </div>
        <div className="absolute top-40 right-20 opacity-25">
          <SpraySplatter className="w-60 h-60" color="#FF00FF" />
        </div>
        <div className="absolute bottom-20 left-1/3 opacity-20">
          <SpraySplatter className="w-48 h-48" color="#39FF14" />
        </div>
        
        {/* Stars */}
        <div className="absolute top-20 right-10">
          <SprayStar className="w-16 h-16" color="#39FF14" />
        </div>
        <div className="absolute bottom-32 right-32">
          <SprayStar className="w-12 h-12" color="#00FFFF" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Logo con efecto spray */}
          <div className="mb-12 flex justify-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-72 h-72 md:w-96 md:h-96 drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]">
              <Image 
                src="/logo-transparent.png" 
                alt="Barberhood Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <DrippingText color="#00FFFF">
            <h1 className="text-7xl md:text-9xl font-bangers text-neon-cyan mb-4 glow-cyan text-graffiti-outline leading-tight uppercase tracking-wider">
              BARBERHOOD
            </h1>
          </DrippingText>

          <div className="flex items-center justify-center gap-4 my-8">
            <TagArrow className="w-12 h-12" color="#FF00FF" />
            <p className="text-2xl md:text-4xl font-marker text-hot-magenta glow-magenta">
              EL CALAFATE
            </p>
            <TagArrow className="w-12 h-12 transform rotate-180" color="#FF00FF" />
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-bebas tracking-wider">
            <span className="text-lime-spray glow-lime">BARBERÍA URBANA</span> · 
            <span className="text-neon-cyan glow-cyan"> TATTOO STUDIO</span> · 
            <span className="text-hot-magenta glow-magenta"> STREET STYLE</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href="https://wa.me/5492966353697" 
              className="group relative px-12 py-5 bg-neon-cyan text-black font-bebas text-3xl tracking-widest hover:bg-hot-magenta hover:text-white transition-all duration-300 shadow-spray-strong hover-spray-glow uppercase border-4 border-black rotate-graffiti-1"
            >
              <span className="relative z-10">AGENDÁ TURNO</span>
            </a>
            
            <a 
              href="#servicios" 
              className="group relative px-12 py-5 bg-transparent border-4 border-lime-spray text-lime-spray glow-lime font-bebas text-3xl tracking-widest hover:bg-lime-spray hover:text-black transition-all duration-300 shadow-spray hover-spray-glow uppercase rotate-graffiti-2"
            >
              <span className="relative z-10">SERVICIOS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - Street Flyers */}
      <section id="servicios" className="py-32 px-4 relative bg-concrete-light torn-edge-top">
        <div className="absolute inset-0 opacity-10 bg-concrete-wall bg-cover"></div>
        
        {/* Splatters decorativos */}
        <div className="absolute top-20 right-10 opacity-20">
          <SpraySplatter className="w-32 h-32" color="#FF00FF" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Título graffiti */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-6 mb-6">
              <SprayStar className="w-12 h-12" color="#00FFFF" />
              <DrippingText color="#FF00FF">
                <h2 className="text-7xl md:text-9xl font-bangers text-hot-magenta glow-magenta text-spray-shadow uppercase">
                  SERVICIOS
                </h2>
              </DrippingText>
              <SprayStar className="w-12 h-12" color="#00FFFF" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const rotation = index % 2 === 0 ? -1.5 : 1;
              
              return (
                <div
                  key={service.id}
                  className={`relative group bg-black border-4 ${service.popular ? 'border-lime-spray' : `border-${service.color}`} p-8 shadow-spray hover-spray-glow transition-all duration-300`}
                  style={{ transform: `rotate(${rotation}deg)` }}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Duct tape en la parte superior */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3/4">
                    <DuctTape className="h-6" rotation={rotation * -1} />
                  </div>
                  
                  {service.popular && (
                    <div className="absolute -top-8 -right-8 bg-lime-spray text-black px-4 py-2 font-bebas text-xl rotate-12 shadow-spray">
                      ★ TOP ★
                    </div>
                  )}
                  
                  <div className={`text-${service.color} mb-6 flex justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-20 h-20" />
                  </div>
                  
                  <h3 className="text-3xl font-bangers text-white text-center mb-4 tracking-wide">
                    {service.name}
                  </h3>
                  
                  <div className="text-center mb-4">
                    <span className={`text-4xl font-bebas text-${service.color} glow-${service.color.split('-')[0]}`}>
                      {service.price}
                    </span>
                  </div>
                  
                  <div className="border-t-2 border-dashed border-white/30 pt-4 mt-4">
                    <p className="text-white/70 font-marker text-sm text-center uppercase">
                      {service.duration}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tattoo Section - Metal Wall */}
      <section className="py-32 px-4 relative overflow-hidden bg-concrete torn-edge-top spray-splatter">
        <div className="absolute inset-0 opacity-15 bg-metal-texture bg-cover"></div>
        
        {/* Splatters */}
        <div className="absolute top-1/4 left-10 opacity-25">
          <SpraySplatter className="w-56 h-56" color="#00FFFF" />
        </div>
        <div className="absolute bottom-1/4 right-20 opacity-20">
          <SpraySplatter className="w-48 h-48" color="#39FF14" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="inline-block bg-neon-cyan text-black font-bebas text-3xl px-8 py-3 mb-8 shadow-spray rotate-graffiti-1">
                INK STUDIO
              </div>
              
              <DrippingText color="#00FFFF">
                <h2 className="text-8xl md:text-[120px] font-bangers leading-none mb-8 text-white text-graffiti-outline uppercase">
                  TATTOO<br/>
                  <span className="text-hot-magenta glow-magenta">ART</span>
                </h2>
              </DrippingText>
              
              <div className="border-l-8 border-lime-spray pl-6 py-4 mb-10 rotate-graffiti-3 bg-black/50">
                <p className="text-white text-2xl mb-4 font-marker">
                  EXPRESATE EN LA PIEL
                </p>
                <p className="text-neon-cyan font-bebas text-xl glow-cyan">
                  REALISMO • OLD SCHOOL • BLACKWORK
                </p>
              </div>
              
              <a 
                href="https://wa.me/5492966353697"
                className="inline-block px-10 py-5 bg-hot-magenta text-white font-bebas text-3xl hover:bg-lime-spray hover:text-black transition-all shadow-spray-strong hover-spray-glow uppercase border-4 border-black"
              >
                CONSULTÁ DISEÑO
              </a>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-8">
              {tattoos.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`bg-black border-4 border-${item.color} p-8 hover:border-neon-cyan transition-all group hover-spray-glow shadow-spray`}
                  style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                >
                  <div className="text-center mb-4">
                    <SkullStencil className={`w-16 h-16 mx-auto text-${item.color} group-hover:text-neon-cyan transition-colors`} />
                  </div>
                  <h3 className="text-3xl font-bebas text-white text-center mb-3 tracking-wider">{item.style}</h3>
                  <p className={`text-${item.color} font-marker text-center text-lg`}>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Stencil Style */}
      <section className="py-32 px-4 bg-black-wall border-t-8 border-neon-cyan torn-edge-top relative">
        <div className="absolute inset-0 opacity-5 bg-brick-wall bg-cover"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-8xl md:text-[120px] font-bangers text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-hot-magenta to-lime-spray mb-4 uppercase">
              THE CREW
            </h2>
            <div className="flex items-center justify-center gap-4">
              <TagArrow className="w-16 h-16" color="#00FFFF" />
              <TagArrow className="w-16 h-16" color="#FF00FF" />
              <TagArrow className="w-16 h-16" color="#39FF14" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {[
              { name: 'FACU', age: 18, specialty: 'FADE MASTER', instagram: '@facu.cabreraa_', color: 'neon-cyan' },
              { name: 'ALEXIS', age: 20, specialty: 'BEARD KING', instagram: '@alexxis.tt', color: 'hot-magenta' }
            ].map((barbero, index) => (
              <div 
                key={index} 
                className={`relative bg-concrete border-8 border-${barbero.color} p-10 hover:bg-concrete-light transition-all shadow-spray-strong rotate-graffiti-${index + 1}`}
              >
                {/* Duct tape superior */}
                <div className="absolute -top-6 left-1/4 w-2/3">
                  <DuctTape className="h-8" rotation={index === 0 ? -3 : 2} />
                </div>
                
                <div className="flex items-center gap-8">
                  <div className={`w-28 h-28 bg-black border-4 border-${barbero.color} flex items-center justify-center shadow-spray`}>
                    <span className={`text-7xl font-bangers text-${barbero.color} glow-${barbero.color.split('-')[0]}`}>
                      {barbero.name[0]}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-5xl font-bangers text-white mb-2 tracking-widest uppercase">
                      {barbero.name}
                    </h3>
                    <p className={`font-marker text-2xl text-${barbero.color} mb-4 uppercase`}>
                      {barbero.specialty}
                    </p>
                    <a 
                      href={`https://instagram.com/${barbero.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-spray hover:text-neon-cyan transition-colors text-xl flex items-center gap-2 group font-bebas"
                    >
                      <span className="text-3xl">📸</span>
                      <span className="border-b-2 border-transparent group-hover:border-neon-cyan transition-all">
                        {barbero.instagram}
                      </span>
                    </a>
                  </div>
                </div>
                
                {/* Spray star decoration */}
                <div className={`absolute -bottom-4 -right-4`}>
                  <SprayStar className="w-12 h-12" color={index === 0 ? '#00FFFF' : '#FF00FF'} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Brick Wall */}
      <footer className="py-20 px-4 bg-concrete border-t-8 border-hot-magenta relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-brick-wall bg-cover"></div>
        
        {/* Spray splatters */}
        <div className="absolute bottom-10 left-20 opacity-20">
          <SpraySplatter className="w-40 h-40" color="#39FF14" />
        </div>
        <div className="absolute top-10 right-20 opacity-15">
          <SpraySplatter className="w-32 h-32" color="#00FFFF" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Logo/Brand */}
            <div className="text-center md:text-left">
              <div className="text-6xl font-bangers text-white mb-4 text-graffiti-outline uppercase">
                BARBER<span className="text-neon-cyan glow-cyan">HOOD</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <SprayStar className="w-6 h-6" color="#FF00FF" />
                <p className="font-marker text-hot-magenta text-lg">EST. 2024 · EL CALAFATE</p>
                <SprayStar className="w-6 h-6" color="#FF00FF" />
              </div>
            </div>
            
            {/* Info */}
            <div className="text-center md:text-right space-y-4">
              <div className="inline-block border-4 border-lime-spray px-8 py-4 font-bebas text-white text-2xl tracking-widest shadow-spray bg-black rotate-graffiti-2">
                PATROCINIO LARA 163
              </div>
              <p className="text-white/70 font-marker text-sm">
                © 2024 BARBERHOOD • <span className="text-neon-cyan">STREET CULTURE</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
