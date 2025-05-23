
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Legacy from '@/components/Legacy';
import Collections from '@/components/Collections';
import StatsSection from '@/components/StatsSection';
import About from '@/components/About';
import Clients from '@/components/Clients';
import CraftPromise from '@/components/CraftPromise';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import fonts
import '@fontsource/playfair-display';
import '@fontsource/cormorant-garamond';
import '@fontsource/inter';

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <Legacy />
      <Collections />
      <StatsSection />
      <About />
      <CraftPromise />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
