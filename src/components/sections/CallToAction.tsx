import { Link } from "react-router-dom";
import { ArrowRight, Mail, Calendar, MessageCircle, Sparkles } from "lucide-react";

const CallToAction = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Drop me a line anytime",
      action: "hello@designer.com",
      highlight: "24h response"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a free consultation",
      action: "30-min discovery",
      highlight: "Free session"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Quick questions welcome",
      action: "Start conversation",
      highlight: "Instant reply"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="space-y-20">
          {/* Main CTA Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 text-center">
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
                  Ready to Create Something{" "}
                  <span className="text-primary">Amazing?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Let's turn your vision into reality. I'm here to help you build exceptional 
                  digital experiences that your users will love.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 group"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border rounded-2xl p-8 text-center h-full hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {method.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="font-semibold text-foreground">
                        {method.action}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {method.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-primary">100+</div>
              <p className="text-muted-foreground font-medium">Projects Delivered</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-primary">98%</div>
              <p className="text-muted-foreground font-medium">Client Satisfaction</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-primary">24h</div>
              <p className="text-muted-foreground font-medium">Response Time</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-primary">5★</div>
              <p className="text-muted-foreground font-medium">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
