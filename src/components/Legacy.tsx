
import React from 'react';

const Legacy = () => {
  const timelineEvents = [
    {
      year: "1982",
      title: "The Foundation",
      description: "Established as a small family workshop in Pakistan with just three sewing machines."
    },
    {
      year: "1995",
      title: "First Major Contract",
      description: "Secured our first major contract with a European textile distributor."
    },
    {
      year: "2005",
      title: "Second Generation",
      description: "The founder's children joined the business, bringing modern techniques and global vision."
    },
    {
      year: "2012",
      title: "Factory Expansion",
      description: "Expanded production facilities to over 20,000 square feet with advanced machinery."
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Recognized as a premium supplier of industrial garments across three continents."
    }
  ];

  return (
    <section id="legacy" className="py-32 bg-[#F6F5F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1C1C1E] mb-6">Our Legacy</h2>
          <p className="text-xl text-[#1C1C1E]/80 leading-relaxed">
            A timeline of craftsmanship excellence spanning over four decades. From humble beginnings to 
            international recognition, our journey reflects our commitment to quality and precision.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#F0C75E]"></div>
          
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div 
                    className={`md:px-10 ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    <span className="text-6xl font-serif font-bold text-[#F0C75E]">{event.year}</span>
                    <h3 className="text-2xl font-serif font-semibold text-[#1C1C1E] mt-2">{event.title}</h3>
                    <p className="mt-3 text-lg text-[#1C1C1E]/70">{event.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F0C75E] border-4 border-[#F6F5F3] z-10 top-0 md:top-1/2"></div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
