
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Farman Tailors' attention to detail is unmatched. They've been providing our staff uniforms for years, and the quality has been consistently exceptional.",
      name: "Sarah Johnson",
      title: "Procurement Director",
      company: "Global Hospitality Group"
    },
    {
      quote: "We needed specialized workwear for extreme conditions, and Farman's solutions have significantly improved safety while maintaining comfort for our workers.",
      name: "Ahmed Al-Rashid",
      title: "Health & Safety Manager",
      company: "Desert Engineering Ltd."
    },
    {
      quote: "The ability to scale production without compromising on quality makes Farman Tailors an invaluable partner for our rapidly expanding retail chain.",
      name: "Mei Zhang",
      title: "Operations Lead",
      company: "AsiaPacific Retail"
    }
  ];

  return (
    <section className="py-32 bg-[#F6F5F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1C1C1E] mb-6">
            Client Stories
          </h2>
          <p className="text-xl text-[#1C1C1E]/80 leading-relaxed max-w-3xl mx-auto">
            Discover why leading businesses across industries trust Farman Tailors 
            for their premium garment manufacturing needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="bg-white p-10 shadow-sm border border-[#1C1C1E]/5">
              <p className="text-xl leading-relaxed mb-10 text-[#1C1C1E]/80 font-serif italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#1C1C1E]/10 flex items-center justify-center mr-4">
                  <span className="font-serif text-xl font-bold text-[#1C1C1E]">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium text-[#1C1C1E]">{testimonial.name}</div>
                  <div className="text-sm text-[#1C1C1E]/70">{testimonial.title}, {testimonial.company}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
