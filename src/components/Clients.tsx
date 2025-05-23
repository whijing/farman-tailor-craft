
import React from 'react';

const Clients = () => {
  // Placeholder client logos
  const clients = [
    { name: "Global Construction Corp", industry: "Construction" },
    { name: "Luxury Hotels Group", industry: "Hospitality" },
    { name: "MediCare Solutions", industry: "Healthcare" },
    { name: "TechGiant Industries", industry: "Technology" },
    { name: "Emirates Group", industry: "Aviation" },
    { name: "European Retail Alliance", industry: "Retail" }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1C1C1E] mb-6">
            Trusted Partners
          </h2>
          <p className="text-xl text-[#1C1C1E]/80 leading-relaxed max-w-3xl mx-auto">
            We're proud to collaborate with industry leaders who value quality, 
            reliability, and exceptional craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 rounded-full bg-[#F6F5F3] flex items-center justify-center mb-4">
                <span className="text-3xl font-serif font-bold text-[#1C1C1E]/30">{client.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1E] mb-1">{client.name}</h3>
              <p className="text-[#1C1C1E]/60">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
