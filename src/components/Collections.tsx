
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Collections = () => {
  const collections = [
    {
      title: "Protective Workwear",
      description: "Engineered for durability and safety, our industrial workwear meets the highest international standards while maintaining comfort and functionality.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3"
    },
    {
      title: "Corporate Uniforms",
      description: "Elevate your brand identity with bespoke corporate apparel that balances professionalism with distinctive style and uncompromising quality.",
      image: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3"
    },
    {
      title: "Institutional Collections",
      description: "From healthcare to hospitality, our institutional collections combine functionality, durability and design that resonates with your organization's values.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="collections" className="py-32 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Signature Collections
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Each garment represents a culmination of precision engineering and meticulous craftsmanship, 
            reflecting our commitment to excellence.
          </p>
        </div>
        
        <div className="space-y-40">
          {collections.map((collection, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] to-transparent opacity-60"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-4xl font-serif font-bold text-white mb-6">{collection.title}</h3>
                <p className="text-xl text-white/80 leading-relaxed mb-10">
                  {collection.description}
                </p>
                <Button variant="link" className="text-[#F0C75E] hover:text-[#F0C75E]/80 p-0 flex items-center text-lg font-medium">
                  Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
