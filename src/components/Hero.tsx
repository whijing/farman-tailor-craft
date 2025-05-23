
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, MessageCircle, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-6 bg-green-700 hover:bg-green-600 text-white border-0">
            <Award className="h-4 w-4 mr-2" />
            Made in Pakistan - Quality Guaranteed
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Industrial
            <span className="block text-blue-300">Clothing & Uniforms</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Second-generation garment manufacturing excellence. Specializing in high-quality industrial clothing, 
            safety wear, and custom uniforms for businesses worldwide. Built on legacy, trust, and precision tailoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4">
              <Download className="mr-2 h-5 w-5" />
              Download Catalogue
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-300">25+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300">500+</div>
              <div className="text-slate-300">B2B Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300">50K+</div>
              <div className="text-slate-300">Units Monthly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
