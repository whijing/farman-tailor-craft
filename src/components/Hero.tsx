import React from 'react';
import { Button } from '@/components/ui/button';
import backgroundVideo from '../videos/856434-hd_1920_1080_25fps (1).mp4';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1E]/70 via-[#1C1C1E]/60 to-[#1C1C1E] z-[1]"></div>
      
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover visible"
        style={{ visibility: 'visible' }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-[2] flex flex-col items-center">
        <h1 className="text-7xl md:text-8xl font-serif font-bold mb-8 text-white leading-none tracking-tighter">
          <span className="block">Farman</span>
          <span className="block mt-2">Tailors</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light tracking-wide max-w-2xl">
          Crafted Legacy. Engineered Precision.
        </p>
        
        <div className="flex flex-col items-center gap-12">
          <button 
            className="inline-flex items-center justify-center px-10 py-6 text-lg font-medium rounded-none bg-[#F0C75E] hover:bg-[#E0B74E] text-[#1C1C1E] transition-colors visible"
          >
            View Our Collections
          </button>
        </div>
      </div>

      {/* Scroll to explore - positioned lower */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-white/80 font-serif text-sm italic mb-3">Scroll to explore</p>
        <div className="h-16 w-0.5 bg-white/40 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
