
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Units Per Month",
      description: "Production capacity for bulk orders"
    },
    {
      number: "40+",
      label: "Years of Heritage",
      description: "Second-generation textile expertise"
    },
    {
      number: "250+",
      label: "Skilled Artisans",
      description: "Dedicated craftspeople and technicians"
    },
    {
      number: "3",
      label: "Continents Served",
      description: "Global reach with local precision"
    }
  ];

  return (
    <section className="py-32 bg-[#014421]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Built for Scale
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Our state-of-the-art facility combines traditional craftsmanship with industrial efficiency,
            enabling us to meet large-scale demands without compromising on quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#F6F5F3] mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-medium text-[#F6F5F3] mb-2">{stat.label}</h3>
              <p className="text-[#F6F5F3]/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
