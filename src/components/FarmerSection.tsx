
import { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Star, MapPin, Award } from 'lucide-react';

const farmers = [
  {
    id: 1,
    name: "Maya Sharma",
    location: "Himachal Pradesh",
    specialty: "Organic Apples & Kiwi",
    image: "https://images.unsplash.com/photo-1551651653-c5186a1fbba2?auto=format&fit=crop&q=80&w=500",
    rating: 4.9,
    verified: true,
    since: "2019",
    products: 23,
    description: "Fourth-generation fruit farmer practicing traditional Himalayan farming techniques enhanced with modern organic standards."
  },
  {
    id: 2,
    name: "Rajan Patel",
    location: "Gujarat",
    specialty: "Heritage Rice Varieties",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=500",
    rating: 4.8,
    verified: true,
    since: "2017",
    products: 16,
    description: "Dedicated to preserving and growing indigenous rice varieties using zero-chemical methods and traditional water conservation."
  },
  {
    id: 3,
    name: "Anita Reddy",
    location: "Karnataka",
    specialty: "Coffee & Spices",
    image: "https://images.unsplash.com/photo-1620553967890-ac932a4a5503?auto=format&fit=crop&q=80&w=500",
    rating: 4.9,
    verified: true,
    since: "2020",
    products: 19,
    description: "Forest-friendly coffee and spice cultivation using shade-growing techniques that protect local biodiversity."
  }
];

const FarmerSection = () => {
  const [activeFarmer, setActiveFarmer] = useState(farmers[0]);
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

  // Auto rotate through farmers
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFarmer(prevFarmer => {
        const currentIndex = farmers.findIndex(f => f.id === prevFarmer.id);
        const nextIndex = (currentIndex + 1) % farmers.length;
        return farmers[nextIndex];
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="farmers" 
      ref={sectionRef}
      className="section py-24 bg-gradient-to-b from-white to-nature-50/50 relative overflow-hidden"
    >
      {/* Background subtle patterns */}
      <div className="absolute inset-0 bg-grain opacity-[0.03]"></div>
      
      <div className="container-tight mb-16">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <span className="caption text-primary inline-block mb-3">Verified Farmers</span>
          <h2 className="title mb-4">Meet The People Behind Your Food</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Our platform showcases verified natural farmers who follow sustainable practices and bring you authentic, chemical-free produce.
          </p>
        </div>
      </div>

      <div className="container-wide">
        {/* Featured Farmer */}
        <div 
          className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Farmer Image */}
            <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                style={{ backgroundImage: `url(${activeFarmer.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Farmer name overlay for mobile */}
              <div className="absolute bottom-0 left-0 p-6 lg:hidden text-white">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={16} className="text-nature-200" />
                  <span className="text-xs font-medium text-nature-200">Verified Natural Farmer</span>
                </div>
                <h3 className="text-2xl font-medium">{activeFarmer.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin size={14} />
                  <span className="text-sm">{activeFarmer.location}</span>
                </div>
              </div>
            </div>
            
            {/* Farmer Details */}
            <div className="lg:col-span-3 p-6 lg:p-10">
              {/* Desktop farmer name */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={18} className="text-nature-600" />
                  <span className="text-sm font-medium text-nature-600">Verified Natural Farmer</span>
                </div>
                <h3 className="text-3xl font-medium mb-2">{activeFarmer.name}</h3>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{activeFarmer.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-amber-500 fill-amber-500" />
                    <span className="text-sm font-medium">{activeFarmer.rating}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8">{activeFarmer.description}</p>
              
              {/* Specialty & badges */}
              <div className="mb-8">
                <div className="font-medium mb-3">Specialty</div>
                <div className="inline-block px-4 py-2 bg-nature-100 text-nature-800 rounded-full text-sm">
                  {activeFarmer.specialty}
                </div>
              </div>
              
              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-nature-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-medium text-nature-700">{activeFarmer.since}</div>
                  <div className="text-xs text-muted-foreground mt-1">Joined</div>
                </div>
                <div className="bg-nature-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-medium text-nature-700">{activeFarmer.products}</div>
                  <div className="text-xs text-muted-foreground mt-1">Products</div>
                </div>
                <div className="bg-nature-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-medium text-nature-700">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Natural</div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="button-primary flex-1">View Products</button>
                <button className="button-outline flex-1">Visit Farm Profile</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Farmer selector */}
        <div 
          className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {farmers.map((farmer) => (
            <button
              key={farmer.id}
              onClick={() => setActiveFarmer(farmer)}
              className={`text-left p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md ${
                activeFarmer.id === farmer.id 
                  ? 'bg-white border border-nature-200 shadow-md' 
                  : 'bg-transparent'
              }`}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                  style={{ backgroundImage: `url(${farmer.image})` }}
                ></div>
                <div>
                  <h4 className="font-medium">{farmer.name}</h4>
                  <p className="text-sm text-muted-foreground">{farmer.specialty}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-xs font-medium">{farmer.rating}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Verification highlights */}
        <div 
          className={`mt-16 bg-white rounded-xl p-8 shadow-sm border border-nature-100 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ShieldCheck className="h-8 w-8 text-nature-600" />,
                title: "Rigorous Verification",
                description: "Every farmer undergoes thorough on-site inspection"
              },
              {
                icon: <Award className="h-8 w-8 text-nature-600" />,
                title: "Natural Certification",
                description: "Guaranteed chemical-free farming practices"
              },
              {
                icon: <Star className="h-8 w-8 text-nature-600" />,
                title: "Quality Reviews",
                description: "Transparent customer feedback and ratings"
              },
              {
                icon: <MapPin className="h-8 w-8 text-nature-600" />,
                title: "Local Sourcing",
                description: "Supporting farmers in your region"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerSection;
