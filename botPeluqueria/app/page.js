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
    { id: 1, name: 'CORTE CLÁSICO', price: '$20.000', duration: '30min', icon: ScissorsStencil, color: 'neon-cyan', 
      gallery: ['/service-corte.jpg', '/service-corte-2.jpg', '/service-corte-3.jpg'] },
    { id: 2, name: 'BARBA PREMIUM', price: '$25.000', duration: '20min', icon: BeardStencil, color: 'hot-magenta',
      gallery: ['/service-barba.jpg', '/service-barba-2.jpg', '/service-barba-3.jpg'] },
    { id: 3, name: 'FULL SERVICE', price: '$30.000', duration: '45min', icon: RazorStencil, color: 'lime-spray', popular: true,
      gallery: ['/service-full.jpg', '/service-full-2.jpg', '/service-full.jpg'] },
    { id: 4, name: 'NAVAJA CLÁSICA', price: '$22.000', duration: '30min', icon: CombStencil, color: 'orange-tag',
      gallery: ['/service-navaja.jpg', '/service-navaja-2.jpg', '/service-navaja.jpg'] },
  ];

  const tattoos = [
    { id: 1, style: 'BLACKWORK', price: 'DESDE $ 40K', color: 'white-stencil',
      gallery: ['/tattoo-blackwork.jpg', '/tattoo-blackwork.jpg', '/tattoo-blackwork.jpg'] },
    { id: 2, style: 'REALISMO', price: 'CONSULTAR', color: 'neon-cyan',
      gallery: ['/tattoo-realismo.jpg', '/tattoo-realismo.jpg', '/tattoo-realismo.jpg'] },
    { id: 3, style: 'OLD SCHOOL', price: 'DESDE $ 35K', color: 'hot-magenta',
      gallery: ['/tattoo-oldschool.jpg', '/tattoo-oldschool.jpg', '/tattoo-oldschool.jpg'] },
    { id: 4, style: 'LETTERING', price: 'DESDE $ 25K', color: 'lime-spray',
      gallery: ['/tattoo-oldschool.jpg', '/tattoo-oldschool.jpg', '/tattoo-oldschool.jpg'] },
  ];

  const jewelry = [
    { id: 1, name: 'CADENAS PLATA 925', price: 'DESDE $ 50K', color: 'orange-tag',
      gallery: ['/jewelry-cadenas.jpg', '/jewelry-cadenas.jpg', '/jewelry-cadenas.jpg'] },
    { id: 2, name: 'ANILLOS CALAVERA', price: 'DESDE $ 20K', color: 'purple-paint',
      gallery: ['/jewelry-anillos.jpg', '/jewelry-anillos.jpg', '/jewelry-anillos.jpg'] },
    { id: 3, name: 'PULSERAS ACERO', price: 'DESDE $ 15K', color: 'neon-cyan',
      gallery: ['/jewelry-anillos.jpg', '/jewelry-anillos.jpg', '/jewelry-anillos.jpg'] },
  ];

  return (
    <div className="min-h-screen bg-black-wall text-white selection:bg-neon-cyan selection:text-black overflow-x-hidden">
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5492966784569"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          width="36" 
          height="36" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <path 
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" 
            fill="white"
          />
          <path 
            d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.713 1.447h.005c6.585 0 11.942-5.336 11.945-11.893 0-3.176-1.24-6.165-3.478-8.453zm-8.475 18.293c-1.778 0-3.52-.478-5.038-1.378l-.361-.214-3.741.98.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.993c-.002 5.45-4.436 9.887-9.88 9.887z" 
            fill="white"
          />
        </svg>
      </a>
      
      {/* Hero Section - Graffiti Wall */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black-wall via-concrete to-black-wall">
        
        {/* Background brick texture with parallax */}
        <div className="absolute inset-0 opacity-30 parallax-bg" style={{ backgroundImage: 'url(/hero-bg.png)' }}></div>
        
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
              href="https://wa.me/5492966784569" 
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
        <div className="absolute inset-0 opacity-20 parallax-bg" style={{ backgroundImage: 'url(/services-bg.png)' }}></div>
        
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
                  className={`relative group bg-black border-4 ${service.popular ? 'border-lime-spray' : `border-${service.color}`} shadow-spray hover-spray-glow transition-all duration-300`}
                  style={{ transform: `rotate(${rotation}deg)` }}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Duct tape en la parte superior */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3/4 z-10">
                    <DuctTape className="h-6" rotation={rotation * -1} />
                  </div>
                  
                  {service.popular && (
                    <div className="absolute -top-8 -right-8 bg-lime-spray text-black px-4 py-2 font-bebas text-xl rotate-12 shadow-spray z-10">
                      ★ TOP ★
                    </div>
                  )}
                  
                  {/* Horizontal Scroll Gallery - Mobile First */}
                  <div className="carousel-container px-4 pt-2 mb-4">
                    {service.gallery.map((img, idx) => (
                      <div key={idx} className="carousel-item relative">
                        <Image
                          src={img}
                          alt={`${service.name} ${idx + 1}`}
                          width={380}
                          height={250}
                          className="w-full h-48 object-cover rounded border-2 border-white/20"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="px-8 pb-8">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tattoo Section - Metal Wall */}
      <section className="py-32 px-4 relative overflow-hidden bg-concrete torn-edge-top spray-splatter">
        <div className="absolute inset-0 opacity-25 parallax-bg" style={{ backgroundImage: 'url(/tattoo-bg.png)' }}></div>
        
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
                href="https://wa.me/5492966784569"
                className="inline-block px-10 py-5 bg-hot-magenta text-white font-bebas text-3xl hover:bg-lime-spray hover:text-black transition-all shadow-spray-strong hover-spray-glow uppercase border-4 border-black"
              >
                CONSULTÁ DISEÑO
              </a>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-8">
              {tattoos.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`bg-black border-4 border-${item.color} hover:border-neon-cyan transition-all group hover-spray-glow shadow-spray`}
                  style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                >
                  {/* Horizontal Scroll Gallery */}
                  <div className="carousel-container px-2 pt-2 mb-4">
                    {item.gallery.map((img, idx) => (
                      <div key={idx} className="carousel-item relative">
                        <Image
                          src={img}
                          alt={`${item.style} ${idx + 1}`}
                          width={380}
                          height={250}
                          className="w-full h-40 object-cover rounded border-2 border-white/10"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="px-8 pb-8">
                    <div className="text-center mb-4">
                      <SkullStencil className={`w-16 h-16 mx-auto text-${item.color} group-hover:text-neon-cyan transition-colors`} />
                    </div>
                    <h3 className="text-3xl font-bebas text-white text-center mb-3 tracking-wider">{item.style}</h3>
                    <p className={`text-${item.color} font-marker text-center text-lg`}>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jewelry Section - Urban Accessories */}
      <section className="py-32 px-4 relative bg-black-wall torn-edge-top">
        <div className="absolute inset-0 opacity-15 parallax-bg" style={{ backgroundImage: 'url(/jewelry-bg.png)' }}></div>
        
        {/* Splatters decorativos */}
        <div className="absolute top-20 left-10 opacity-20">
          <SpraySplatter className="w-40 h-40" color="#FF6600" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-15">
          <SpraySplatter className="w-48 h-48" color="#9D00FF" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-tag text-black font-bebas text-2xl px-6 py-2 mb-6 shadow-spray rotate-graffiti-1">
              PREMIUM GOODS
            </div>
            
            <DrippingText color="#FF6600">
              <h2 className="text-7xl md:text-9xl font-bangers text-white text-graffiti-outline mb-4 uppercase">
                URBAN <span className="text-purple-paint glow-magenta">JEWELRY</span>
              </h2>
            </DrippingText>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <TagArrow className="w-12 h-12" color="#FF6600" />
              <SprayStar className="w-8 h-8" color="#9D00FF" />
              <TagArrow className="w-12 h-12 transform rotate-180" color="#FF6600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {jewelry.map((item, index) => (
              <div 
                key={item.id} 
                className={`group relative bg-concrete border-8 border-${item.color} hover:bg-concrete-light transition-all shadow-spray-strong hover-spray-glow`}
                style={{ transform: `rotate(${index === 1 ? -1.5 : index === 2 ? 1 : 0}deg)` }}
              >
                {/* Duct tape superior */}
                <div className="absolute -top-4 left-1/4 w-2/3 z-10">
                  <DuctTape className="h-6" rotation={index === 1 ? 2 : -2} />
                </div>
                
                {/* Horizontal Scroll Gallery */}
                <div className="carousel-container px-2 pt-6 mb-4">
                  {item.gallery.map((img, idx) => (
                    <div key={idx} className="carousel-item relative">
                      <Image
                        src={img}
                        alt={`${item.name} ${idx + 1}`}
                        width={380}
                        height={250}
                        className="w-full h-48 object-cover rounded border-2 border-white/10"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="text-center px-10 pb-10">
                  <div className={`mb-6`}>
                    <SkullStencil className={`w-20 h-20 mx-auto text-${item.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  
                  <h3 className="text-3xl font-bebas text-white mb-4 tracking-wider uppercase">
                    {item.name}
                  </h3>
                  
                  <div className={`inline-block bg-black border-2 border-${item.color} px-6 py-3`}>
                    <p className={`text-${item.color} font-marker text-xl`}>{item.price}</p>
                  </div>
                </div>

                {/* Spray star decoration */}
                <div className="absolute -bottom-4 -right-4">
                  <SprayStar className="w-10 h-10" color={item.id === 1 ? '#FF6600' : item.id === 2 ? '#9D00FF' : '#00FFFF'} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Stencil Style */}
      <section className="py-32 px-4 bg-black-wall border-t-8 border-neon-cyan torn-edge-top relative">
        <div className="absolute inset-0 opacity-15 parallax-bg" style={{ backgroundImage: 'url(/team-bg.png)' }}></div>
        
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

      {/* Google Reviews Section */}
      <section className="py-32 px-4 relative bg-black-wall border-t-8 border-neon-cyan overflow-hidden">
        <div className="absolute inset-0 opacity-10 parallax-bg" style={{ backgroundImage: 'url(/services-bg.png)' }}></div>
        
        {/* Spray splatters */}
        <div className="absolute top-20 left-10 opacity-15">
          <SpraySplatter className="w-64 h-64" color="#FF00FF" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-15">
          <SpraySplatter className="w-56 h-56" color="#39FF14" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Título */}
          <div className="text-center mb-20">
            <div className="inline-block bg-lime-spray text-black font-bebas text-2xl px-6 py-2 mb-6 shadow-spray rotate-graffiti-1">
              ⭐ GOOGLE REVIEWS
            </div>
            
            <DrippingText color="#00FFFF">
              <h2 className="text-7xl md:text-9xl font-bangers text-white text-graffiti-outline mb-4 uppercase">
                LO QUE <span className="text-hot-magenta glow-magenta">DICEN</span>
              </h2>
            </DrippingText>

            <div className="flex items-center justify-center gap-3 mt-6">
              <TagArrow className="w-12 h-12" color="#39FF14" />
              <div className="flex gap-2">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-4xl text-yellow-spray drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">⭐</span>
                ))}
              </div>
              <TagArrow className="w-12 h-12 transform rotate-180" color="#39FF14" />
            </div>
          </div>

          {/* Reviews Carousel - Mobile First */}
          <div className="carousel-container px-4">
            {[
              {
                name: "Matías R.",
                rating: 5,
                comment: "Tremendo lugar! El ambiente es re copado y los muchachos saben lo que hacen. Me hice un fade y quedó de 10. Sin dudas vuelvo.",
                color: "neon-cyan"
              },
              {
                name: "Lucas G.",
                rating: 5,
                comment: "Mejor barbería de El Calafate. Atención de primera, música grosa y cortes prolijos. Recomendado 100%",
                color: "hot-magenta"
              },
              {
                name: "Diego F.",
                rating: 5,
                comment: "Excelente servicio! Me hicieron un degradado espectacular. El lugar tiene onda y te sentís cómodo. Voy a seguir viniendo.",
                color: "lime-spray"
              },
              {
                name: "Sebastián M.",
                rating: 5,
                comment: "La barbería es un lujo! Me atendieron de 10, me hice barba y corte. Quedé más que conforme. Totalmente recomendable.",
                color: "orange-tag"
              }
            ].map((review, index) => (
              <div 
                key={index}
                className={`carousel-item bg-concrete border-4 border-${review.color} shadow-spray-strong hover-spray-glow transition-all group`}
                style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
              >
                {/* Duct tape */}
                <div className="absolute -top-3 left-1/4 w-1/2 z-10">
                  <DuctTape className="h-6" rotation={index % 2 === 0 ? 2 : -2} />
                </div>

                <div className="p-8 pt-10">
                  {/* Estrellas */}
                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-2xl text-yellow-spray drop-shadow-[0_0_8px_rgba(255,255,0,0.6)]">⭐</span>
                    ))}
                  </div>

                  {/* Nombre */}
                  <h3 className="text-3xl font-bebas text-white text-center mb-4 tracking-wider">
                    {review.name}
                  </h3>

                  {/* Comentario */}
                  <p className="text-white/90 font-marker text-center text-lg leading-relaxed italic">
                    "{review.comment}"
                  </p>

                  {/* Google icon decoration */}
                  <div className="flex justify-center mt-6">
                    <span className="text-4xl opacity-50">📱</span>
                  </div>
                </div>

                {/* Spray star decoration */}
                <div className="absolute -bottom-3 -right-3">
                  <SprayStar className="w-10 h-10" color={index === 0 ? '#00FFFF' : index === 1 ? '#FF00FF' : '#39FF14'} />
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <a 
              href="https://g.page/r/CbdbzBxcWZZoEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-lime-spray text-black font-bebas text-3xl hover:bg-neon-cyan transition-all shadow-spray-strong hover-spray-glow uppercase border-4 border-black rotate-graffiti-2"
            >
              ⭐ DEJÁ TU RESEÑA
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Brick Wall */}
      <footer className="py-20 px-4 bg-concrete border-t-8 border-hot-magenta relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 parallax-bg" style={{ backgroundImage: 'url(/hero-bg.png)' }}></div>
        
        {/* Spray splatters */}
        <div className="absolute bottom-10 left-20 opacity-20">
          <SpraySplatter className="w-40 h-40" color="#39FF14" />
        </div>
        <div className="absolute top-10 right-20 opacity-15">
          <SpraySplatter className="w-32 h-32" color="#00FFFF" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
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
            
            {/* Ubicación con Mapa */}
            <div className="text-center space-y-4">
              <div className="inline-block bg-orange-tag text-black font-bebas text-xl px-6 py-2 mb-2 shadow-spray rotate-graffiti-1">
                📍 NUESTRO LOCAL
              </div>
              <div className="inline-block border-4 border-lime-spray px-8 py-4 font-bebas text-white text-2xl tracking-widest shadow-spray bg-black rotate-graffiti-2 mb-4">
                PATROCINIO LARA 163
              </div>
              
              {/* Mapa embebido */}
              <div className="border-4 border-neon-cyan shadow-spray-strong overflow-hidden rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2303.8794733866157!2d-72.2945476!3d-50.350335799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbb0d3d558227e1%3A0x68956c5c1cc97bb7!2sBarber%20Hood!5e1!3m2!1ses!2sar!4v1767931830347!5m2!1ses!2sar"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/70 font-marker text-sm mb-8">
                © 2024 BARBERHOOD • <span className="text-neon-cyan">STREET CULTURE</span>
              </p>
            </div>
          </div>

          {/* Botón Volver al Inicio - Centrado */}
          <div className="flex justify-center mt-12">
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group relative px-10 py-4 bg-transparent border-4 border-lime-spray text-lime-spray glow-lime font-bebas text-2xl tracking-widest hover:bg-lime-spray hover:text-black transition-all duration-300 shadow-spray hover-spray-glow uppercase rotate-graffiti-1 cursor-pointer"
            >
              <span className="relative z-10">↑ VOLVER AL INICIO</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
