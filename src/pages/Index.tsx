
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import FarmerSection from '@/components/FarmerSection';
import TraceabilitySection from '@/components/TraceabilitySection';
import MarketplaceSection from '@/components/MarketplaceSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for navbar height
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Intersection Observer for animation triggers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <FarmerSection />
        <TraceabilitySection />
        <MarketplaceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
