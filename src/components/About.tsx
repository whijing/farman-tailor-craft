
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Second-generation craftsmen with decades of experience in garment manufacturing"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every piece meets international standards"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across industries worldwide with reliable export capabilities"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient production systems ensuring on-time delivery of bulk orders"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-green-700 text-white">
              Legacy & Excellence
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Second-Generation
              <span className="block text-blue-900">Craftsmanship Excellence</span>
            </h2>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                Farman Tailors represents the perfect blend of traditional Pakistani craftsmanship 
                and modern manufacturing capabilities. As a second-generation business, we've built 
                our reputation on precision tailoring, quality materials, and unwavering commitment 
                to client satisfaction.
              </p>
              <p>
                From our state-of-the-art facility in Pakistan, we manufacture high-quality industrial 
                clothing, safety wear, and custom uniforms for businesses worldwide. Our skilled 
                workforce and advanced production systems enable us to handle large-scale orders 
                while maintaining the highest quality standards.
              </p>
              <p>
                <strong className="text-slate-900">"Made in Pakistan"</strong> isn't just a label for us—it's 
                a badge of quality, representing generations of textile expertise and commitment to excellence.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
