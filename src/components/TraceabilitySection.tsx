
import { useState, useRef, useEffect } from 'react';
import { QrCode, MapPin, Calendar, Leaf, ChevronRight } from 'lucide-react';

const TraceabilitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-advance through journey steps
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep(prev => (prev % 4) + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  const traceabilitySteps = [
    {
      step: 1,
      title: "Scan QR Code",
      description: "Every product comes with a unique QR code that holds its complete history",
      icon: <QrCode className="h-6 w-6" />
    },
    {
      step: 2,
      title: "See Origin",
      description: "View the exact farm location and meet the farmer behind your food",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Verify Timeline",
      description: "Check harvesting date and how recently your food was picked",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Farming Methods",
      description: "Learn about the natural farming practices used to grow your food",
      icon: <Leaf className="h-6 w-6" />
    }
  ];

  return (
    <section 
      id="traceability" 
      ref={sectionRef}
      className="section py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100 rounded-full opacity-30 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nature-100 rounded-full opacity-30 translate-y-1/2 blur-3xl"></div>
      
      <div className="container-tight mb-16">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <span className="caption text-primary inline-block mb-3">Complete Transparency</span>
          <h2 className="title mb-4">Know Your Food's Journey</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Trace every product from farm to table with our innovative QR code technology.
          </p>
        </div>
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* QR Code Demo */}
          <div 
            className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-nature-100 relative">
              {/* Phone mockup */}
              <div className="relative mx-auto max-w-[280px] bg-black rounded-[32px] p-4 shadow-2xl aspect-[9/19]">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-10"></div>
                
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[24px] overflow-hidden">
                  {/* App header */}
                  <div className="bg-primary px-4 py-3 text-white text-center relative">
                    <div className="absolute top-3 left-3">
                      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H19M1 1H19M1 13H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="text-sm font-medium">Terra Trace</div>
                  </div>
                  
                  {/* Product details */}
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-nature-100 flex items-center justify-center mr-3">
                        <Leaf className="w-6 h-6 text-nature-600" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Organic</div>
                        <div className="text-sm font-medium">Red Delicious Apples</div>
                      </div>
                    </div>
                    
                    {/* Product journey timeline */}
                    <div className="relative mt-6 pl-6 border-l border-nature-200">
                      {traceabilitySteps.map((step, index) => (
                        <div 
                          key={index}
                          className={`mb-5 transition-all duration-500 ${activeStep === step.step ? 'opacity-100' : 'opacity-50'}`}
                        >
                          <div 
                            className={`absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
                              activeStep === step.step ? 'bg-primary scale-125' : 'bg-nature-200'
                            }`}
                            style={{ top: `${index * 70 + 12}px` }}
                          ></div>
                          <div className="flex items-start">
                            <div className={`mr-3 p-2 rounded-lg ${activeStep === step.step ? 'bg-primary/10 text-primary' : 'bg-muted'}`}>
                              {step.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium">{step.title}</div>
                              <div className="text-xs text-muted-foreground">{step.description}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom action */}
                    <button className="w-full bg-primary text-white rounded-lg py-2 text-sm font-medium mt-4">
                      View Complete Details
                    </button>
                  </div>
                </div>
              </div>
              
              {/* QR Code overlay */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-2xl bg-white p-3 shadow-lg rotate-12 border border-nature-100">
                <div className="w-full h-full bg-black rounded-lg flex items-center justify-center p-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="10" y="10" width="30" height="30" fill="white" />
                    <rect x="60" y="10" width="30" height="30" fill="white" />
                    <rect x="10" y="60" width="30" height="30" fill="white" />
                    <rect x="20" y="20" width="10" height="10" fill="black" />
                    <rect x="70" y="20" width="10" height="10" fill="black" />
                    <rect x="20" y="70" width="10" height="10" fill="black" />
                    <rect x="40" y="10" width="5" height="5" fill="white" />
                    <rect x="50" y="10" width="5" height="5" fill="white" />
                    <rect x="40" y="20" width="5" height="5" fill="white" />
                    <rect x="50" y="20" width="5" height="5" fill="white" />
                    <rect x="85" y="40" width="5" height="5" fill="white" />
                    <rect x="85" y="50" width="5" height="5" fill="white" />
                    <rect x="10" y="40" width="5" height="5" fill="white" />
                    <rect x="10" y="50" width="5" height="5" fill="white" />
                    <rect x="40" y="40" width="20" height="20" fill="white" />
                    <rect x="45" y="45" width="10" height="10" fill="black" />
                    <rect x="40" y="65" width="5" height="5" fill="white" />
                    <rect x="50" y="65" width="5" height="5" fill="white" />
                    <rect x="55" y="70" width="5" height="5" fill="white" />
                    <rect x="60" y="65" width="5" height="5" fill="white" />
                    <rect x="70" y="70" width="5" height="5" fill="white" />
                    <rect x="75" y="75" width="5" height="5" fill="white" />
                    <rect x="65" y="55" width="5" height="5" fill="white" />
                    <rect x="75" y="60" width="5" height="5" fill="white" />
                    <rect x="85" y="85" width="5" height="5" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Traceability Info */}
          <div 
            className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          >
            <h3 className="text-2xl font-medium mb-6">Complete Transparency At Your Fingertips</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nature-100 flex items-center justify-center mr-4">
                  <QrCode className="w-6 h-6 text-nature-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Scan & Discover</h4>
                  <p className="text-muted-foreground">
                    Every product has a unique QR code that reveals its complete journey from the farm to your table. A simple scan connects you to authentic information.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nature-100 flex items-center justify-center mr-4">
                  <Leaf className="w-6 h-6 text-nature-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Detailed Farming Practices</h4>
                  <p className="text-muted-foreground">
                    Learn exactly how your food was grown, what natural methods were used, and the sustainable practices implemented by the farmer.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nature-100 flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-nature-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Freshness Tracking</h4>
                  <p className="text-muted-foreground">
                    See exactly when products were harvested, packed, and shipped to ensure you're getting the freshest natural food possible.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nature-100 flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-nature-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Farm Connection</h4>
                  <p className="text-muted-foreground">
                    Connect directly with the farmers, learn their stories, and even arrange farm visits to see natural farming in action.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="button-primary mt-8 flex items-center">
              <span>Try Demo Traceability</span>
              <ChevronRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraceabilitySection;
