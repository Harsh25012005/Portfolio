import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'Github' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@designer.com', label: 'Email' },
  ];

  const skills = [
    'UX Design', 'UI Design', 'Prototyping', 'User Research', 
    'Information Architecture', 'Interaction Design', 'Usability Testing', 
    'Design Systems', 'Wireframing', 'Visual Design'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-8 text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Greeting */}
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span className="animate-bounce">👋</span>
            <span className="text-body">Hey! I'm a UX Designer,</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="hero-text">
              Crafting{' '}
              <span className="brand-accent">purpose driven</span>
              <br />
              experiences that inspire
              <br />
              & engage.
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-body max-w-3xl mx-auto leading-relaxed">
            I work with brands globally to build pixel-perfect, engaging, and accessible 
            digital experiences that drive results and achieve business goals.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-body hover:text-primary transition-smooth"
              >
                <social.icon className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link to="/about">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-medium transition-bounce hover:scale-105"
              >
                Know me better
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Animated Skills Ticker */}
        <div className="mt-20 overflow-hidden border-t border-b border-border py-4">
          <div className="flex space-x-8 ticker">
            {[...skills, ...skills].map((skill, index) => (
              <span
                key={index}
                className="text-lg font-medium text-muted-foreground whitespace-nowrap flex items-center"
              >
                {skill}
                <span className="mx-4 text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;