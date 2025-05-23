
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "BuildTech Construction",
      role: "Procurement Manager",
      content: "Farman Tailors has been our go-to supplier for safety workwear for over 3 years. Their quality is unmatched and delivery is always on time.",
      rating: 5
    },
    {
      name: "Ahmed Al-Rashid",
      company: "Gulf Hospitality Group",
      role: "Operations Director",
      content: "The custom uniforms for our hotel chain exceeded expectations. Professional quality with attention to detail that reflects our brand perfectly.",
      rating: 5
    },
    {
      name: "Dr. Maria Santos",
      company: "Healthcare Solutions Ltd",
      role: "Chief Administrator",
      content: "Reliable partner for our medical uniforms. Comfortable fabrics, professional appearance, and excellent bulk pricing for our hospital network.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trusted by businesses worldwide for quality, reliability, and professional service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 text-blue-900 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-900 font-medium">{testimonial.role}</div>
                  <div className="text-sm text-slate-600">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
