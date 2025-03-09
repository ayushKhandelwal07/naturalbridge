
import { useState, useRef, useEffect } from 'react';
import { ShoppingBag, ChevronRight, ChevronLeft, Star, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Himalayan Red Apples",
    farmer: "Maya Sharma",
    price: "₹220/kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    category: "Fruits",
    isFeatured: true
  },
  {
    id: 2,
    name: "Wild Forest Honey",
    farmer: "Rajan Patel",
    price: "₹650/500g",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    category: "Honey & Preserves",
    isFeatured: true
  },
  {
    id: 3,
    name: "Organic Black Rice",
    farmer: "Anita Reddy",
    price: "₹320/kg",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    category: "Grains",
    isFeatured: true
  },
  {
    id: 4,
    name: "Fresh Turmeric Root",
    farmer: "Rajan Patel",
    price: "₹180/500g",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9921d9?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    category: "Spices",
    isFeatured: true
  },
  {
    id: 5,
    name: "Organic Cherry Tomatoes",
    farmer: "Maya Sharma",
    price: "₹120/250g",
    image: "https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?auto=format&fit=crop&q=80&w=400",
    rating: 4.6,
    category: "Vegetables",
    isFeatured: true
  },
  {
    id: 6,
    name: "Single-Origin Coffee",
    farmer: "Anita Reddy",
    price: "₹450/250g",
    image: "https://images.unsplash.com/photo-1559525736-1007199288c4?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    category: "Beverages",
    isFeatured: true
  }
];

const categories = [
  "All", "Fruits", "Vegetables", "Grains", "Spices", "Honey & Preserves", "Beverages"
];

const MarketplaceSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sliderRef = useRef<HTMLDivElement>(null);
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

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="marketplace" 
      ref={sectionRef}
      className="section py-24 bg-gradient-to-b from-white to-sky-50/50 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grain opacity-[0.03]"></div>

      <div className="container-tight mb-16">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <span className="caption text-primary inline-block mb-3">Direct Connection</span>
          <h2 className="title mb-4">Shop Directly From Farmers</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Browse our marketplace of verified natural products and support sustainable farming while enjoying premium quality.
          </p>
        </div>
      </div>
      
      {/* Categories Slider */}
      <div className="container-wide mb-8">
        <div className={`flex items-center justify-between transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-medium">Browse Categories</h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full bg-white border border-border hover:bg-muted transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-white border border-border hover:bg-muted transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          className={`mt-4 flex items-center space-x-3 overflow-x-auto hide-scrollbar transition-all duration-700 pb-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white border border-border hover:bg-muted/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container-wide">
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-border group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
                  <Heart size={18} className="text-muted-foreground hover:text-primary transition-colors" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-white text-xs font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs py-1 px-2 bg-nature-100 text-nature-800 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-sm font-medium">{product.price}</span>
                </div>
                
                <h4 className="text-lg font-medium mt-2">{product.name}</h4>
                <p className="text-sm text-muted-foreground">by {product.farmer}</p>
                
                <div className="mt-4 flex items-center gap-2">
                  <button className="button-primary flex-1 py-2 h-auto">
                    <ShoppingBag size={16} className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="p-2 rounded-md border border-border hover:bg-muted transition-colors">
                    <QRCodeIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="button-outline px-8 py-3 text-base inline-flex items-center">
            <span>View All Products</span>
            <ChevronRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
      
      {/* Market Benefits */}
      <div className="container-wide mt-20">
        <div 
          className={`bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-border transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-6">Why Buy Direct?</h3>
              <p className="text-muted-foreground">
                Our marketplace eliminates middlemen to ensure farmers receive fair compensation and consumers get premium products at reasonable prices.
              </p>
            </div>
            
            <div className="space-y-6 md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nature-100 flex items-center justify-center mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-nature-600">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Premium Quality</h4>
                    <p className="text-sm text-muted-foreground">
                      Natural farming produces richer flavors and higher nutritional content
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nature-100 flex items-center justify-center mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-nature-600">
                      <path d="M22 12H2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Environmental Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Support practices that heal rather than harm our ecosystems
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nature-100 flex items-center justify-center mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-nature-600">
                      <path d="M22 9H2M2 9L9 15V22L15 20V15L22 9M2 9V2H22V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Chemical-Free</h4>
                    <p className="text-sm text-muted-foreground">
                      Enjoy food grown without synthetic pesticides or fertilizers
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nature-100 flex items-center justify-center mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-nature-600">
                      <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Farmer Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Up to 80% of your purchase goes directly to the farmers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom QR Code Icon
const QRCodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
    <path d="M14 14H16M16 14H18M16 14V16M18 14V16M18 16V18M18 16H20M14 16V18M14 18H16M16 18H18M18 18V20M20 16V18M20 18H18M20 18V20M20 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default MarketplaceSection;
