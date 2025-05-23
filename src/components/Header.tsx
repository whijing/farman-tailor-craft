
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-900">Farman Tailors</h1>
            <span className="ml-2 text-sm text-slate-600 font-medium">Est. 2nd Generation</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">Home</a>
            <a href="#products" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">Products</a>
            <a href="#about" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">About</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-slate-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>+92 XXX XXXXXXX</span>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-800">
              Request Quote
            </Button>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
