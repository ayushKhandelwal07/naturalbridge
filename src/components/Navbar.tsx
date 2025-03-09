
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8 lg:px-12",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-primary font-medium text-xl flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all">
            <div className="w-5 h-5 rounded-full bg-primary"></div>
          </div>
          <span className="transition-transform group-hover:translate-x-1">Terra</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
          <a href="#farmers" className="text-sm font-medium hover:text-primary transition-colors">Farmers</a>
          <a href="#traceability" className="text-sm font-medium hover:text-primary transition-colors">Traceability</a>
          <a href="#marketplace" className="text-sm font-medium hover:text-primary transition-colors">Marketplace</a>
        </div>

        {/* Nav Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
            <Search size={18} />
          </button>
          <button className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
            <ShoppingBag size={18} />
          </button>
          <button className="button-primary">
            Join Now
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[68px] bg-white/90 backdrop-blur-lg shadow-lg md:hidden z-50 transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-[calc(100vh-68px)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          <a 
            href="#features" 
            className="text-lg font-medium py-2 border-b border-border hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#farmers" 
            className="text-lg font-medium py-2 border-b border-border hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Farmers
          </a>
          <a 
            href="#traceability" 
            className="text-lg font-medium py-2 border-b border-border hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Traceability
          </a>
          <a 
            href="#marketplace" 
            className="text-lg font-medium py-2 border-b border-border hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Marketplace
          </a>
          <div className="pt-4 flex flex-col space-y-4">
            <button className="button-outline w-full flex justify-center items-center gap-2">
              <Search size={18} />
              Search Products
            </button>
            <button className="button-primary w-full">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
