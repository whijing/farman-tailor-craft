
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Download, MessageCircle, Handshake } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Partner With Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to experience premium quality and professional service? Get in touch with our team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-900 mr-3" />
                  <span className="text-slate-700">+92 XXX XXXXXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-900 mr-3" />
                  <span className="text-slate-700">info@farmantailors.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-900 mr-3" />
                  <span className="text-slate-700">Manufacturing Facility, Pakistan</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button className="bg-blue-900 hover:bg-blue-800 w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Request Quote
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Catalogue
              </Button>
              <Button variant="outline" className="w-full">
                <Handshake className="mr-2 h-4 w-4" />
                Partner With Us
              </Button>
            </div>
          </div>
          
          <Card className="border-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Company Name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" />
                </div>
                <Input placeholder="Subject" />
                <Textarea 
                  placeholder="Tell us about your requirements, quantities, and timeline..."
                  rows={4}
                />
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
