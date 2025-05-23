
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif text-white font-bold tracking-wider">FARMAN</h1>
            <span className="ml-2 text-xs text-white font-medium uppercase tracking-widest">Est. 1982</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 hover:text-white"
            >
              View Our Collections
            </Button>
          </div>
          
          <button 
            className="text-white z-50" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Vertical Menu */}
      <div 
        className={`fixed inset-0 bg-[#1C1C1E] bg-opacity-95 z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col justify-center`}
      >
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-12">
            <a 
              href="#home" 
              className="text-3xl font-serif text-white hover:text-[#F0C75E] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#legacy" 
              className="text-3xl font-serif text-white hover:text-[#F0C75E] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Legacy
            </a>
            <a 
              href="#collections" 
              className="text-3xl font-serif text-white hover:text-[#F0C75E] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a 
              href="#about" 
              className="text-3xl font-serif text-white hover:text-[#F0C75E] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-3xl font-serif text-white hover:text-[#F0C75E] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
          
          <div className="mt-20 flex flex-col items-center space-y-4">
            <div className="flex items-center text-sm text-white/80">
              <Phone className="h-4 w-4 mr-2" />
              <span>+92 XXX XXXXXXX</span>
            </div>
            <div className="flex items-center text-sm text-white/80">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@farmantailors.com</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
