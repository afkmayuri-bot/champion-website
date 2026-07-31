import React from 'react';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
            <div className="mb-6 bg-white p-3 rounded-xl inline-block">
              <img 
                src="https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/b60aaa8ab323f5ff5e438d24f6dc233a.jpg" 
                alt="Champions Tutorials Logo" 
                className="h-16 md:h-20 w-auto object-contain rounded-md"
              />
            </div>
            <p className="text-primary-foreground/90 leading-relaxed font-medium">
              Pune's most trusted coaching for CBSE, ICSE & State Board. Classes VIII–XII + JEE / NEET / CET preparation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-accent" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</h3>
            <div className="space-y-4 text-primary-foreground/90 font-medium">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <div>
                  <p>9284707840</p>
                  <p>9823059233</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <p>2nd Floor, Kudale Patil Prestige, Sinhgad Road, Pune – 411051</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-accent" />
                <p>Open until 9 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-accent" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quick Links</h3>
            <div className="space-y-3 text-primary-foreground/90 font-medium">
              <p className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</p>
              <p className="hover:text-accent cursor-pointer transition-colors">Terms of Service</p>
              <p className="hover:text-accent cursor-pointer transition-colors">Refund Policy</p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/20" />

        <div className="text-center text-primary-foreground/80 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Champions Tutorials. All rights reserved.</p>
          <p className="mt-3 text-lg font-bold text-accent italic">"Coaching Right तो Future Bright!"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;