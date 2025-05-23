
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Briefcase, Building, Users, Globe, Settings } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Shield,
      title: "Protective Workwear",
      description: "High-quality jackets, coveralls, gloves and safety apparel for industrial environments",
      features: ["Fire-resistant materials", "High-visibility options", "Durable construction", "Custom branding"],
      color: "bg-red-50 border-red-200"
    },
    {
      icon: Briefcase,
      title: "Corporate Uniforms",
      description: "Professional uniforms for offices, banks, and corporate environments",
      features: ["Premium fabrics", "Professional styling", "Custom sizing", "Brand integration"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: Building,
      title: "Industrial Safety Apparel",
      description: "Specialized safety wear for construction and manufacturing industries",
      features: ["OSHA compliant", "Multi-layer protection", "Reinforced stitching", "Weather resistant"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: Users,
      title: "Institutional Uniforms",
      description: "Custom uniforms for schools, hospitals, and hospitality sectors",
      features: ["Comfortable fabrics", "Easy maintenance", "Bulk orders", "Quick turnaround"],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: Globe,
      title: "Private Label Manufacturing",
      description: "International brand manufacturing with quality control and timely delivery",
      features: ["Global standards", "Quality assurance", "Scalable production", "Export ready"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: Settings,
      title: "Made-to-Order Clothing",
      description: "Custom B2B clothing solutions tailored to specific industry requirements",
      features: ["Custom patterns", "Flexible quantities", "Technical fabrics", "Design consultation"],
      color: "bg-teal-50 border-teal-200"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Product Range</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions for industrial clothing, safety wear, and custom uniforms. 
            Quality craftsmanship meeting international standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className={`${product.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <product.icon className="h-8 w-8 text-slate-700 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
                </div>
                
                <p className="text-slate-700 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="mr-2 mb-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
