
import { Instagram, Twitter, Facebook, Globe, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nature-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-nature-400"></div>
              </div>
              <span className="text-xl font-medium text-white">Terra</span>
            </div>
            
            <p className="text-nature-300 mb-6 max-w-md">
              Connecting conscious consumers with authentic natural farmers through transparency, traceability, and direct market access.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">Verification Process</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">Traceability</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">App Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Participate</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">For Farmers</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">For Consumers</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">Community Events</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white transition-colors">Partner With Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-nature-400 flex-shrink-0 mt-0.5" />
                <span className="text-nature-300">hello@terramarketplace.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-nature-400 flex-shrink-0 mt-0.5" />
                <span className="text-nature-300">123 Green Avenue, Eco Park, Sustainable City 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-nature-400 text-sm">
              © 2023 Terra Marketplace. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-nature-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-nature-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-nature-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
