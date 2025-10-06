import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Collections = () => {
  useEffect(() => {
    // Split text animation setup
    const headlines = document.querySelectorAll('.split-text');
    headlines.forEach(headline => {
      const text = headline.textContent || '';
      headline.textContent = '';
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.setProperty('--delay', `${i * 0.05}s`);
        span.className = 'inline-block animate-character';
        headline.appendChild(span);
      });
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Trigger character animations for split text
          if (entry.target.classList.contains('split-text')) {
            const chars = entry.target.querySelectorAll('.animate-character');
            chars.forEach(char => char.classList.add('animate-in'));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const collections = [
    {
      title: "School Uniforms",
      description: "High-quality school uniforms designed for comfort and durability, serving educational institutions across Northern Areas.",
      details: [
        "Custom school logos and emblems",
        "Durable fabrics for daily wear",
        "Size ranges for all age groups",
        "Seasonal variations available"
      ],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3"
    },
    {
      title: "Professional Uniforms",
      description: "Custom-designed professional uniforms for corporate environments, ensuring a polished and consistent brand image.",
      details: [
        "Corporate branding integration",
        "Professional tailoring",
        "Premium fabric selection",
        "Multiple style options"
      ],
      image: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3"
    },
    {
      title: "Security Uniforms",
      description: "Durable and professional security uniforms designed for functionality and authority, serving security agencies in Northern Areas.",
      details: [
        "Heavy-duty materials",
        "Functional pocket designs",
        "Weather-appropriate options",
        "Agency-specific customization"
      ],
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3"
    },
    {
      title: "Hotel Staff Uniforms",
      description: "Elegant and practical uniforms for hospitality staff, designed to enhance the professional appearance of hotel personnel.",
      details: [
        "Department-specific designs",
        "Comfortable fabrics",
        "Easy maintenance",
        "Brand color matching"
      ],
      image: "https://images.unsplash.com/photo-1507680465142-eca2f078d9d6?ixlib=rb-4.0.3"
    },
    {
      title: "Custom Uniforms",
      description: "Specialized uniform solutions tailored to your specific requirements, with attention to detail and quality craftsmanship.",
      details: [
        "Customized designs",
        "Bulk order capability",
        "Quality assurance",
        "Timely delivery"
      ],
      image: "https://images.unsplash.com/photo-1558227691-41eb0ac6cb56?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="collections" className="relative py-32 bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E]">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 max-w-3xl">
          <h2 className="split-text text-5xl md:text-6xl font-serif font-bold text-white mb-6 opacity-100">
            Our Collections
          </h2>
          <div className="space-y-6">
            <p className="animate-on-scroll text-xl text-white/80 leading-relaxed transform transition-all duration-1000 delay-300">
              Each garment represents a culmination of precision engineering and meticulous craftsmanship, 
              reflecting our commitment to excellence. As one of the largest uniform suppliers in Northern Areas, 
              we take pride in delivering high-quality uniforms that meet the diverse needs of our clients.
            </p>
            <p className="animate-on-scroll text-xl text-white/80 leading-relaxed transform transition-all duration-1000 delay-500">
              Our emphasis lies in giving special attention to each client, taking care to accurately 
              determine individual requirements. We believe in delivering efficient services with 
              uncompromising quality standards.
            </p>
          </div>
        </div>
        
        <div className="space-y-40">
          {collections.map((collection, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:w-1/2 animate-on-scroll transform transition-all duration-1000 ${
                index % 2 === 0 ? 'translate-x-0' : 'translate-x-0'
              }`}>
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <div className="w-full h-full transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] to-transparent opacity-60 
                    transition-all duration-700 group-hover:opacity-40">
                    <div className="absolute inset-0 bg-[#F0C75E]/20 opacity-0 transition-opacity duration-500 
                      group-hover:opacity-100 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>
              
              <div 
                className={`lg:w-1/2 animate-on-scroll transform transition-all duration-1000 ${
                  index % 2 === 0 ? 'translate-x-0' : 'translate-x-0'
                }`}
              >
                <h3 className="text-4xl font-serif font-bold text-white mb-6 
                  hover:text-[#F0C75E] transition-all duration-300 hover:translate-x-2">
                  {collection.title}
                </h3>
                <p className="text-xl text-white/80 leading-relaxed mb-6 transition-all duration-500 
                  hover:translate-x-2">
                  {collection.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {collection.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-white/70 hover:text-white/90 transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#F0C75E] rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="link" 
                  className="text-[#F0C75E] group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center text-lg font-medium 
                    transition-transform duration-500 group-hover:translate-x-2">
                    Explore Collection 
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-all duration-500 
                      group-hover:translate-x-2 group-hover:scale-110" />
                  </span>
                  <span className="absolute inset-0 z-0 bg-[#F0C75E]/10 transform -translate-x-full 
                    transition-transform duration-500 group-hover:translate-x-0"></span>
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
