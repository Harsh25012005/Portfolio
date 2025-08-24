import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Mail, Calendar, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="surface-elevated p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          
          <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to Transform Your
                <br />
                <span className="brand-accent">Digital Experience?</span>
              </h2>
              <p className="text-xl text-body leading-relaxed max-w-3xl mx-auto">
                Let's work together to create meaningful, user-centered solutions 
                that drive real business results and delight your users.
              </p>
            </div>

            {/* Action Options */}
            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Email Me</h3>
                <p className="text-body text-sm">
                  Send me a message about your project
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Schedule a Call</h3>
                <p className="text-body text-sm">
                  Book a free 30-minute consultation
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Start a Chat</h3>
                <p className="text-body text-sm">
                  Quick questions? Let's chat about it
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="px-8 py-6 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                  View My Work
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-border">
              <div className="grid sm:grid-cols-3 gap-6 text-sm text-body">
                <div className="space-y-1">
                  <div className="font-medium">Response Time</div>
                  <div>Within 24 hours</div>
                </div>
                <div className="space-y-1">
                  <div className="font-medium">Free Consultation</div>
                  <div>30-minute discovery call</div>
                </div>
                <div className="space-y-1">
                  <div className="font-medium">Project Timeline</div>
                  <div>4-12 weeks typical</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;