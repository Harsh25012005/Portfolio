import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Calendar, MessageCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-32 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-[34px] font-bold text-foreground leading-tight">
              Let's Work
              <br />
              <span className="text-primary">Together</span>
            </h2>
            <p className="text-[18px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to create something amazing? Let's discuss your project and
              bring your vision to life.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Link to="/contact">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-medium hover:scale-105 transition-transform"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-border">
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium">Response Time</p>
              <p className="text-foreground">Within 24 hours</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium">
                Free Consultation
              </p>
              <p className="text-foreground">30-minute discovery call</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium">
                Project Timeline
              </p>
              <p className="text-foreground">4-12 weeks typical</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
