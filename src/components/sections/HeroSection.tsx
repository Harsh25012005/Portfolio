import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Dribbble,
  Instagram,
  Linkedin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-4 pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className={`space-y-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
          {/* Main Content */}
          <div className="text-center space-y-8 max-w-5xl mx-auto mt-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Available for new projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight">
                UI Designer from
                <br />
                <span className="text-primary">Malang, Indonesia</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Love something clean & minimalist User Interface.
                <br />
                Creating digital experiences that inspire and engage.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-medium hover:scale-105 transition-transform"
                >
                  Let's work together
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-medium hover:scale-105 transition-transform"
                >
                  View my work
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-16">
            {/* Scroll Indicator */}
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center hover:border-primary/50 transition-colors">
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </div>
              <span className="text-sm font-medium">Scroll to explore</span>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Years Exp
                </div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Projects
                </div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Satisfaction
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground font-medium mr-2">
                Follow me
              </span>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
              >
                <Dribbble className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
