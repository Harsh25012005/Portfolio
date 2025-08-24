import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Award, Users, Target, Zap } from 'lucide-react';

const AboutPreview = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: Target, label: 'Projects Delivered', value: '100+' },
    { icon: Zap, label: 'Avg. Conversion Boost', value: '85%' }
  ];

  const values = [
    {
      title: 'User-Centered Approach',
      description: 'Every design decision is backed by user research and data-driven insights.'
    },
    {
      title: 'Collaborative Process',
      description: 'Working closely with stakeholders to ensure alignment and shared vision.'
    },
    {
      title: 'Measurable Impact',
      description: 'Focusing on outcomes that drive real business value and user satisfaction.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                About <span className="brand-accent">Me</span>
              </h2>
              <p className="text-xl text-body leading-relaxed">
                I'm a passionate UX Designer with over 5+ years of experience creating 
                meaningful digital experiences that solve real problems and drive business growth.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-body leading-relaxed">
                My journey started with a curiosity about human behavior and technology. 
                Today, I specialize in transforming complex problems into intuitive, 
                accessible digital solutions that users love.
              </p>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-sm">{value.title}</h4>
                      <p className="text-body text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/about">
              <Button size="lg">
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 surface-elevated text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <p className="text-sm text-body">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;