import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  Search, 
  Smartphone, 
  Monitor, 
  Users, 
  BarChart, 
  Zap, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'UX Research & Strategy',
      description: 'Understanding user needs through research, interviews, and data analysis to inform design decisions.',
      deliverables: ['User Personas', 'Journey Maps', 'Research Reports', 'Strategy Documents'],
      duration: '2-4 weeks',
      price: 'From $3,000'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing interfaces that prioritize user experience and business goals.',
      deliverables: ['Wireframes', 'High-fidelity Designs', 'Interactive Prototypes', 'Design System'],
      duration: '4-8 weeks',
      price: 'From $5,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Designing native and responsive mobile applications for iOS and Android platforms.',
      deliverables: ['Mobile Wireframes', 'App UI Design', 'Interaction Design', 'App Store Assets'],
      duration: '6-10 weeks',
      price: 'From $7,000'
    },
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description: 'Complete web design and front-end development services for responsive websites and web applications.',
      deliverables: ['Responsive Design', 'Front-end Code', 'CMS Integration', 'Performance Optimization'],
      duration: '8-12 weeks',
      price: 'From $8,000'
    },
    {
      icon: Users,
      title: 'Usability Testing',
      description: 'Testing designs with real users to identify pain points and optimize user experience.',
      deliverables: ['Test Plans', 'User Testing Sessions', 'Analysis Reports', 'Recommendations'],
      duration: '1-2 weeks',
      price: 'From $2,000'
    },
    {
      icon: BarChart,
      title: 'Design System Creation',
      description: 'Building comprehensive design systems to ensure consistency across all digital touchpoints.',
      deliverables: ['Component Library', 'Style Guide', 'Documentation', 'Implementation Guide'],
      duration: '4-6 weeks',
      price: 'From $6,000'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your business goals, user needs, and project requirements through research and stakeholder interviews.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Developing a comprehensive design strategy based on research findings and best practices.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Creating wireframes, prototypes, and high-fidelity designs that solve user problems effectively.'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Validating designs through user testing and iterating based on feedback and data.'
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Delivering final designs, assets, and documentation for seamless development handoff.'
    }
  ];

  const benefits = [
    'User-centered design approach',
    'Collaborative design process',
    'Regular updates and communication',
    'Post-launch support included',
    'Mobile-first responsive design',
    'Accessibility compliance',
    'Performance optimization',
    'SEO-friendly implementations'
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={`space-y-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Header */}
          <section className="text-center space-y-6">
            <h1 className="text-display font-bold">
              My <span className="brand-accent">Services</span>
            </h1>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
              I offer comprehensive UX/UI design services to help businesses create 
              exceptional digital experiences that drive results.
            </p>
          </section>

          {/* Services Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 surface-elevated hover:shadow-lg transition-smooth">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-body text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Deliverables:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.deliverables.map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-medium">{service.duration}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-xs text-muted-foreground">Starting at</p>
                      <p className="text-sm font-semibold text-primary">{service.price}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          {/* Process Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">My Design Process</h2>
              <p className="text-body max-w-2xl mx-auto">
                A structured approach to ensure every project delivers exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <div key={item.step} className="space-y-4">
                  <div className="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-4 md:text-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <span className="text-primary font-bold text-lg">{item.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block w-px h-8 bg-border mx-auto"></div>
                    )}
                  </div>
                  <div className="space-y-2 md:text-center">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-body text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why Work With Me?</h2>
              <p className="text-body leading-relaxed">
                I bring a unique combination of design expertise, technical knowledge, 
                and business acumen to every project. My goal is to create designs that 
                not only look great but also drive measurable results.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-body">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 surface-elevated">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Ready to Start?</h3>
                  <p className="text-body">
                    Let's discuss your project and see how I can help bring your vision to life.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Free Consultation</h4>
                    <p className="text-sm text-body">
                      30-minute call to discuss your project goals and requirements.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link to="/contact" className="block">
                      <Button className="w-full">
                        Schedule a Call
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/projects" className="block">
                      <Button variant="outline" className="w-full">
                        View My Work
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Services;