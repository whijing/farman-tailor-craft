
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1E] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-8">Farman Tailors</h3>
            <p className="text-white/70 mb-8 leading-relaxed max-w-md">
              Second-generation garment manufacturing excellence. Specializing in high-quality 
              industrial clothing, safety wear, and custom uniforms for businesses worldwide.
            </p>
            <Button className="bg-[#F0C75E] hover:bg-[#E0B74E] text-[#1C1C1E] rounded-none px-8">
              Download Catalogue
            </Button>
          </div>
          
          <div>
            <h4 className="text-xl font-serif mb-8">Collections</h4>
            <ul className="space-y-4 text-white/70">
              <li>Protective Workwear</li>
              <li>Corporate Uniforms</li>
              <li>Industrial Safety Apparel</li>
              <li>Institutional Uniforms</li>
              <li>Private Label Manufacturing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif mb-8">Contact</h4>
            <div className="space-y-5 text-white/70">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <span>+92 XXX XXXXXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@farmantailors.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Manufacturing Facility, Pakistan</span>
              </div>
              <Button variant="ghost" className="text-[#F0C75E] hover:text-[#F0C75E]/80 hover:bg-transparent p-0 -ml-3 mt-2">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40">
          <p>&copy; {new Date().getFullYear()} Farman Tailors. All rights reserved. | Premium Industrial Clothing & Uniforms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
