import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Palette, Smartphone, BarChart, Users, Monitor } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Search,
      title: 'UX Research',
      description: 'Deep user insights through interviews, surveys, and usability testing.',
      features: ['User Interviews', 'Usability Testing', 'Analytics Analysis']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, functional interfaces that delight users and drive conversions.',
      features: ['Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'Native and responsive mobile experiences optimized for all devices.',
      features: ['iOS Design', 'Android Design', 'Cross-platform']
    },
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Responsive websites and web applications with modern UX principles.',
      features: ['Responsive Design', 'Performance', 'Accessibility']
    },
    {
      icon: BarChart,
      title: 'Design Systems',
      description: 'Scalable design systems that ensure consistency across products.',
      features: ['Component Library', 'Style Guide', 'Documentation']
    },
    {
      icon: Users,
      title: 'UX Consulting',
      description: 'Strategic UX guidance to align design with business objectives.',
      features: ['Strategy', 'Workshops', 'Team Training']
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              What I <span className="brand-accent">Offer</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
              Comprehensive UX/UI design services to help your business create 
              exceptional digital experiences that drive results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 surface-elevated hover:shadow-lg transition-smooth group">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-body">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
              <p className="text-body">
                Let's discuss how I can help bring your vision to life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;