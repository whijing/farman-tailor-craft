
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#EFEAE3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1C1C1E] mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-[#1C1C1E]/80 leading-relaxed mb-10">
              Ready to elevate your brand with premium quality garments? Our team is ready to bring your 
              vision to life with precision craftsmanship and uncompromising attention to detail.
            </p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-[#1C1C1E] mb-2">Headquarters</h3>
                <p className="text-lg text-[#1C1C1E]/70">
                  Manufacturing Facility<br />
                  Industrial District<br />
                  Pakistan
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-semibold text-[#1C1C1E] mb-2">Contact Information</h3>
                <p className="text-lg text-[#1C1C1E]/70">
                  Phone: +92 XXX XXXXXXX<br />
                  Email: info@farmantailors.com
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#1C1C1E] rounded-full"></div>
              <div className="w-10 h-10 bg-[#1C1C1E] rounded-full"></div>
              <div className="w-10 h-10 bg-[#1C1C1E] rounded-full"></div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6 bg-white p-10 border border-[#1C1C1E]/10 shadow-sm">
              <h3 className="text-3xl font-serif font-bold text-[#1C1C1E] mb-8">Send an Inquiry</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-[#1C1C1E]/70 mb-2 block">Full Name</label>
                  <Input 
                    placeholder="" 
                    className="border-[#1C1C1E]/20 rounded-none focus:border-[#1C1C1E] focus:ring-0"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#1C1C1E]/70 mb-2 block">Company Name</label>
                  <Input 
                    placeholder="" 
                    className="border-[#1C1C1E]/20 rounded-none focus:border-[#1C1C1E] focus:ring-0"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-[#1C1C1E]/70 mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="" 
                    className="border-[#1C1C1E]/20 rounded-none focus:border-[#1C1C1E] focus:ring-0"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#1C1C1E]/70 mb-2 block">Phone</label>
                  <Input 
                    placeholder="" 
                    className="border-[#1C1C1E]/20 rounded-none focus:border-[#1C1C1E] focus:ring-0"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-[#1C1C1E]/70 mb-2 block">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your requirements..." 
                  rows={4}
                  className="border-[#1C1C1E]/20 rounded-none focus:border-[#1C1C1E] focus:ring-0"
                />
              </div>
              
              <Button className="bg-[#1C1C1E] hover:bg-[#1C1C1E]/90 text-white w-full rounded-none mt-4 py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
