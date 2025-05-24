
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1E]/70 via-[#1C1C1E]/60 to-[#1C1C1E] z-10"></div>
      
      {/* Video background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover"
          playsInline
        >
          <source src="/tailor-background.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1558304970-abd589baebe5?ixlib=rb-4.0.3" 
            alt="Farman Tailors" 
            className="w-full h-full object-cover" 
          />
        </video>
      </div>
      
      {/* Blended overlay image */}
      <div className="absolute inset-0 z-5">
        <img 
          src="https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" 
          alt="Fabric texture overlay" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <h1 className="text-7xl md:text-8xl font-serif font-bold mb-8 text-white leading-none tracking-tighter">
          <span className="block">Farman</span>
          <span className="block mt-2">Tailors</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light tracking-wide max-w-2xl mx-auto">
          Crafted Legacy. Engineered Precision.
        </p>
        
        <div className="flex justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[#F0C75E] hover:bg-[#E0B74E] text-[#1C1C1E] border-0 text-lg px-10 py-6 rounded-none font-medium"
          >
            View Our Collections
          </Button>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <p className="text-white/80 font-serif text-sm italic">Scroll to explore</p>
          <div className="h-16 w-0.5 bg-white/40 mx-auto mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
