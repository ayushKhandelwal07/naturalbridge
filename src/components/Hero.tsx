
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      heroRef.current.style.setProperty('--x', `${x * 100}%`);
      heroRef.current.style.setProperty('--y', `${y * 100}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen pt-24 pb-20 flex flex-col items-center justify-center overflow-hidden"
      style={{ 
        '--x': '50%', 
        '--y': '50%' 
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-nature-50/40 via-transparent to-sky-50/40 opacity-70"></div>
      <div className="absolute inset-0 bg-grain opacity-[0.03]"></div>
      
      {/* Animated Circle Highlight */}
      <div 
        className="absolute pointer-events-none w-[40vw] h-[40vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(133, 189, 112, 0.15) 0%, rgba(255,255,255,0) 70%)',
          left: 'var(--x)',
          top: 'var(--y)',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
      
      <div className="container-tight relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <span className="capitalize inline-flex items-center rounded-full border border-nature-200 bg-nature-50 px-4 py-1 text-xs font-medium text-nature-800 transition-colors">
              Connecting Farms to Tables
            </span>
          </div>
          
          <h1 className="headline text-center mb-6">
            <span className="block relative animate-fade-up" style={{ animationDelay: '0.2s' }}>Authentic Natural Farming,</span>
            <span className="block relative animate-fade-up" style={{ animationDelay: '0.3s' }}>Just a Scan Away</span>
          </h1>
          
          <p className="subheadline text-center mb-12 max-w-2xl mx-auto relative animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Connect with verified natural farmers, trace your food's journey, and support sustainable agriculture—all in one seamless marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <button className="button-primary px-8 py-6 text-base flex items-center gap-2 w-full sm:w-auto">
              <span>Browse Marketplace</span>
              <ArrowRight size={16} className="animate-pulse" />
            </button>
            
            <button className="button-outline px-8 py-6 text-base w-full sm:w-auto">
              Join as a Farmer
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="container-wide mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 relative animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">1,200+</p>
            <p className="text-sm text-muted-foreground">Verified Natural Farmers</p>
          </div>
          
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">50,000+</p>
            <p className="text-sm text-muted-foreground">Monthly Customers</p>
          </div>
          
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">100%</p>
            <p className="text-sm text-muted-foreground">Traceable Products</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-[fade-in_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
