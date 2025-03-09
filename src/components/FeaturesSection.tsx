
import { CheckCircle2, Sprout, ShieldCheck, QrCode, Users } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-nature-600" />,
      title: "Farmer Verification",
      description:
        "We authenticate natural farming practices with rigorous on-site verification and continuous monitoring to ensure genuine, sustainable agriculture."
    },
    {
      icon: <QrCode className="h-10 w-10 text-nature-600" />,
      title: "Product Traceability",
      description:
        "Scan a QR code to instantly view your food's complete journey from seed to table, including farming methods and certification details."
    },
    {
      icon: <Users className="h-10 w-10 text-nature-600" />,
      title: "Direct Market Connection",
      description:
        "Connect directly with farmers, eliminating middlemen to ensure fair pricing for consumers and better returns for farmers."
    }
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef} 
      className="section py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-nature-100 rounded-full opacity-30 -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100 rounded-full opacity-30 translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
      
      <div className="container-tight mb-16">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <span className="caption text-primary inline-block mb-3">Features</span>
          <h2 className="title mb-4">How Our Platform Works</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Revolutionizing the natural food ecosystem with transparency, trust, and direct connections.
          </p>
        </div>
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card glass border border-nature-100 transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="title">The Verification Process</h3>
            <p className="subtitle max-w-2xl mx-auto mt-2">
              Our rigorous 4-step verification ensures only genuine natural farming products reach you
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-4 md:left-1/2 md:top-1/2 h-[calc(100%-32px)] md:h-1 w-1 md:w-[calc(100%-150px)] bg-nature-200 md:-translate-x-1/2 md:-translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  number: 1,
                  title: "Application",
                  description: "Farmers submit detailed information about their practices"
                },
                {
                  number: 2,
                  title: "Verification Visit",
                  description: "On-site inspection by agricultural experts"
                },
                {
                  number: 3,
                  title: "Certification",
                  description: "Digital certificate with unique QR for each farm"
                },
                {
                  number: 4,
                  title: "Continuous Monitoring",
                  description: "Regular check-ins and community reviews"
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-row md:flex-col items-start md:items-center text-left md:text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 rounded-full bg-nature-100 border-4 border-nature-50 text-nature-800 font-bold text-lg mb-0 md:mb-4 mr-4 md:mr-0 z-10">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
