import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Add custom animations to the document
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gradient-xy {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      @keyframes gradient-slow {
        0%, 100% { background-position: 0% 0%; }
        50% { background-position: 100% 100%; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
        33% { transform: translateY(-20px) translateX(10px) scale(1.05); }
        66% { transform: translateY(10px) translateX(-10px) scale(0.95); }
      }
      
      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
        33% { transform: translateY(15px) translateX(-15px) scale(1.1); }
        66% { transform: translateY(-10px) translateX(15px) scale(0.9); }
      }
      
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
        50% { transform: translateY(-30px) translateX(20px) scale(1.15); }
      }
      
      @keyframes float-reverse {
        0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
        50% { transform: translateY(25px) translateX(-25px) scale(0.85); }
      }
      
      @keyframes spin-slow {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes shimmer-delayed {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      
      .animate-gradient-xy {
        background-size: 400% 400%;
        animation: gradient-xy 15s ease infinite;
      }
      
      .animate-gradient-slow {
        background-size: 200% 200%;
        animation: gradient-slow 20s ease infinite;
      }
      
      .animate-float {
        animation: float 8s ease-in-out infinite;
      }
      
      .animate-float-delayed {
        animation: float-delayed 10s ease-in-out infinite;
        animation-delay: -2s;
      }
      
      .animate-float-slow {
        animation: float-slow 12s ease-in-out infinite;
        animation-delay: -4s;
      }
      
      .animate-float-reverse {
        animation: float-reverse 9s ease-in-out infinite;
        animation-delay: -1s;
      }
      
      .animate-spin-slow {
        animation: spin-slow 30s linear infinite;
      }
      
      .animate-shimmer {
        animation: shimmer 8s ease-in-out infinite;
      }
      
      .animate-shimmer-delayed {
        animation: shimmer-delayed 10s ease-in-out infinite;
        animation-delay: -3s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="min-h-screen bg-background dark:bg-background flex items-center justify-center px-4 py-16 sm:py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5 animate-gradient-xy"></div>

      {/* Secondary animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10 animate-gradient-slow"></div>

      {/* Flowing background shapes with enhanced animations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/25 to-accent/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-bl from-accent/20 to-primary/15 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-primary/15 to-accent/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-tl from-accent/25 to-primary/15 rounded-full blur-2xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 via-accent/15 to-primary/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-shimmer-delayed"></div>
      </div>

      {/* Flowing curved lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M-100 400C200 300 400 500 600 400C800 300 1000 500 1300 400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 300C200 200 400 400 600 300C800 200 1000 400 1300 300"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor="hsl(var(--primary))"
                stopOpacity="0"
              />
              <stop
                offset="50%"
                stopColor="hsl(var(--primary))"
                stopOpacity="0.6"
              />
              <stop
                offset="100%"
                stopColor="hsl(var(--primary))"
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor="hsl(var(--accent))"
                stopOpacity="0"
              />
              <stop
                offset="50%"
                stopColor="hsl(var(--accent))"
                stopOpacity="0.4"
              />
              <stop
                offset="100%"
                stopColor="hsl(var(--accent))"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10 text-center px-4">
        <div className={`space-y-6 sm:space-y-8 ${isVisible ? "fade-in" : "opacity-0"}`}>
          {/* Badge and Heading Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Category Badge */}
            <div className="inline-flex items-center justify-center">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/30 text-muted-foreground px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide">
                UI/UX Designer
              </div>
            </div>

            {/* Main Headline and Subtitle */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-primary">Creative</span>{" "}
                <span className="text-foreground">Designs</span>
              </h1>

              <div className="max-w-lg mx-auto px-4 sm:px-0">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Great design happens when imagination meets purpose, shaping
                  experiences that are simple, human, and truly impactful.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2 flex flex-col items-center justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold group transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 text-base sm:text-lg hover:scale-105 overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                <span className="relative z-10">Start a project</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
