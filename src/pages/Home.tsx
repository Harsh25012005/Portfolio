import { useEffect, useRef } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ServicesOverview from '@/components/sections/ServicesOverview';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';

const Home = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Add scroll-triggered animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(60px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes staggerFadeIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-slide-up {
        animation: slideInUp 0.8s ease-out forwards;
      }
      
      .animate-slide-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      
      .animate-slide-right {
        animation: slideInRight 0.8s ease-out forwards;
      }
      
      .animate-fade-scale {
        animation: fadeInScale 0.8s ease-out forwards;
      }
      
      .animate-stagger {
        animation: staggerFadeIn 0.6s ease-out forwards;
      }
      
      .section-hidden {
        opacity: 0;
        transform: translateY(60px);
      }
      
      .section-visible {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .stagger-1 { animation-delay: 0.1s; }
      .stagger-2 { animation-delay: 0.2s; }
      .stagger-3 { animation-delay: 0.3s; }
      .stagger-4 { animation-delay: 0.4s; }
      .stagger-5 { animation-delay: 0.5s; }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
            
            // Add staggered animations to child elements
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-stagger');
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) {
        section.classList.add('section-hidden');
        observer.observe(section);
      }
    });

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-primary/2 to-accent/2 animate-pulse opacity-50 pointer-events-none" />
      
      <HeroSection />
      
      <div 
        ref={(el) => (sectionsRef.current[0] = el)}
        className="relative z-10"
      >
        <FeaturedProjects />
      </div>
      
      <div 
        ref={(el) => (sectionsRef.current[1] = el)}
        className="relative z-10"
      >
        <ServicesOverview />
      </div>
      
      <div 
        ref={(el) => (sectionsRef.current[2] = el)}
        className="relative z-10"
      >
        <Testimonials />
      </div>
      
      <div 
        ref={(el) => (sectionsRef.current[3] = el)}
        className="relative z-10"
      >
        <CallToAction />
      </div>
    </main>
  );
};

export default Home;