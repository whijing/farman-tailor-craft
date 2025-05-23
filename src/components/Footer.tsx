
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Award, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Farman Tailors</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Second-generation garment manufacturing excellence. Specializing in high-quality 
              industrial clothing, safety wear, and custom uniforms for businesses worldwide.
            </p>
            <Badge className="bg-green-700 text-white">
              <Award className="h-4 w-4 mr-2" />
              Made in Pakistan - Quality Guaranteed
            </Badge>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Protective Workwear</li>
              <li>Corporate Uniforms</li>
              <li>Industrial Safety Apparel</li>
              <li>Institutional Uniforms</li>
              <li>Private Label Manufacturing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+92 XXX XXXXXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@farmantailors.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Pakistan</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Farman Tailors. All rights reserved. | Premium Industrial Clothing & Uniforms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
