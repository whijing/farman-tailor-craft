
import React from 'react';

const About = () => {
  const values = [
    {
      title: "Legacy",
      description: "Four decades of textile expertise passed down through generations"
    },
    {
      title: "Precision",
      description: "Meticulous attention to every stitch, seam, and detail"
    },
    {
      title: "Innovation",
      description: "Blending traditional craftsmanship with modern manufacturing techniques"
    },
    {
      title: "Integrity",
      description: "Honest business practices and transparent client relationships"
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
              Farman Tailors represents the perfect blend of traditional Pakistani craftsmanship 
              and modern manufacturing capabilities. As a second-generation business, we've built 
              our reputation on precision tailoring, quality materials, and unwavering commitment 
              to client satisfaction.
            </p>
            <p className="text-xl text-[#1C1C1E]/80 leading-relaxed mb-12">
              From our state-of-the-art facility in Pakistan, we manufacture high-quality industrial 
              clothing, safety wear, and custom uniforms for businesses worldwide. Our skilled 
              workforce and advanced production systems enable us to handle large-scale orders 
              while maintaining the highest quality standards.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {values.map((value, index) => (
                <div key={index}>
                  <h3 className="text-xl font-serif font-semibold text-[#1C1C1E] mb-2">{value.title}</h3>
                  <p className="text-[#1C1C1E]/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507680465142-eca2f078d9d6?ixlib=rb-4.0.3" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full border-2 border-[#1C1C1E] top-8 left-8 -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
