import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-card via-background to-muted relative overflow-hidden">
      {/* Smooth gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Secondary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent"></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Enhanced gradient background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-accent/25 to-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 via-accent/15 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-card/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center space-y-8 sm:space-y-12">

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight px-4">
            Let's Design Something Extraordinary Together
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              I turn ideas into experiences that people love. Ready to create your next big story?
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold group transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 text-base sm:text-lg hover:scale-105 overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
