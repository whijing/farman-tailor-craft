import React from 'react';

const About = () => {
  const values = [
    {
      title: "Legacy",
      description: "More than five decades of excellence in uniform manufacturing since 1968"
    },
    {
      title: "Customer Focus",
      description: "Special attention to each client's individual requirements with customized solutions"
    },
    {
      title: "Quality",
      description: "Commitment to producing high-quality products with timely shipments and efficient services"
    },
    {
      title: "Strong Roots",
      description: "Our success is built on treating our workers as partners, ensuring loyal support and excellence"
    }
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1C1C1E] mb-6">
              Our Story
            </h2>
            <p className="text-xl text-[#1C1C1E]/80 leading-relaxed mb-8">
              Farman Ali Tailor Master stands as one of the largest uniform suppliers in Northern Areas. 
              Since our establishment in 1968, we have expanded our reach across various districts in 
              Northern Areas, making these our major markets. Our reputation is built on producing 
              high-quality products, ensuring timely shipments, and delivering efficient services.
            </p>
            <p className="text-xl text-[#1C1C1E]/80 leading-relaxed mb-8">
              Our emphasis lies in giving special attention to each client, taking care to accurately 
              determine individual requirements. We believe that successful management requires efficiency, 
              administrative ability, and dedication. However, for us at Farman Ali Tailor Master, the 
              ultimate test of success lies in attaining customers' satisfaction.
            </p>
            <p className="text-xl text-[#1C1C1E]/80 leading-relaxed mb-12">
              Our management's strength comes from its strong roots - our workers. We treat each worker 
              as a partner, and their intermingling has nourished us to build up as a strong enterprise. 
              In return, we receive unequivocal and loyal support that enables us to serve our buyers 
              effectively and with greater inspiration.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-serif font-semibold text-[#1C1C1E]">{value.title}</h3>
                  <p className="text-[#1C1C1E]/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[3/4] relative z-10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507680465142-eca2f078d9d6?ixlib=rb-4.0.3" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] to-transparent opacity-30 
                transition-opacity duration-700 group-hover:opacity-20"></div>
            </div>
            <div className="absolute w-full h-full border-2 border-[#1C1C1E] top-8 left-8 -z-0 
              transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
