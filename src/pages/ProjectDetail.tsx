import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Target, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock project data - in real app this would come from API/database
  const project = {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    client: 'RetailCorp',
    year: '2024',
    duration: '3 months',
    role: 'Lead UX Designer',
    team: ['UX Designer', 'UI Designer', 'Product Manager', '2 Developers'],
    status: 'Completed',
    category: 'E-Commerce',
    
    overview: 'A comprehensive redesign of an e-commerce platform focusing on improving user experience, conversion rates, and mobile responsiveness. The project involved complete user research, design system creation, and implementation of modern UX patterns.',
    
    challenge: 'The existing platform had a high bounce rate (65%) and low conversion rate (2.3%). Users complained about confusing navigation, slow checkout process, and poor mobile experience. The client needed a solution that would improve these metrics while maintaining their brand identity.',
    
    solution: 'We conducted extensive user research, created user personas, redesigned the information architecture, and implemented a mobile-first design approach. The new design features streamlined navigation, simplified checkout process, and improved product discovery.',
    
    results: [
      { metric: 'Conversion Rate', before: '2.3%', after: '4.8%', improvement: '+108%' },
      { metric: 'Bounce Rate', before: '65%', after: '42%', improvement: '-35%' },
      { metric: 'Mobile Revenue', before: '30%', after: '55%', improvement: '+83%' },
      { metric: 'Checkout Completion', before: '68%', after: '89%', improvement: '+31%' }
    ],
    
    tags: ['UX Design', 'UI Design', 'User Research', 'Prototyping', 'A/B Testing'],
    
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop'
    ],
    
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews, surveys, and analytics analysis to understand pain points.',
        deliverables: ['User Personas', 'Journey Maps', 'Research Report']
      },
      {
        phase: 'Strategy',
        description: 'Developed design strategy and information architecture based on research findings.',
        deliverables: ['Site Map', 'User Flows', 'Content Strategy']
      },
      {
        phase: 'Design',
        description: 'Created wireframes, prototypes, and high-fidelity designs for all key pages.',
        deliverables: ['Wireframes', 'Prototypes', 'Design System']
      },
      {
        phase: 'Testing',
        description: 'Validated designs through usability testing and A/B testing.',
        deliverables: ['Test Results', 'Optimization Report']
      }
    ],
    
    technologies: ['Figma', 'Principle', 'Hotjar', 'Google Analytics', 'Optimal Workshop'],
    
    testimonial: {
      text: "The redesign exceeded our expectations. The new platform not only looks modern and professional but has significantly improved our business metrics. The team's attention to user research and data-driven design decisions made all the difference.",
      author: "Sarah Johnson",
      role: "VP of Digital Marketing, RetailCorp"
    }
  };

  if (!project) {
    return (
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link to="/projects">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <motion.main 
      className="min-h-screen surface-elevated text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Back Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Button variant="ghost" className="mb-12 nav-link">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.header 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex justify-center gap-3 mb-6">
            <Badge className="surface-subtle text-body border border-border/30">
              {project.category}
            </Badge>
            <Badge variant="outline" className="text-body">
              {project.year}
            </Badge>
            <Badge variant="outline" className="text-body">
              {project.status}
            </Badge>
          </div>
          
          <h1 className="hero-text mb-6">
            {project.title.split(' ').map((word, index) => (
              <span key={index} className={index === project.title.split(' ').length - 1 ? 'brand-accent' : ''}>
                {word}{index < project.title.split(' ').length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>
          
          <p className="text-body text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            {project.overview}
          </p>

          <div className="flex justify-center gap-4">
            <Button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-smooth">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Site
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full transition-smooth">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.section 
          className="mb-20"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="aspect-video rounded-2xl overflow-hidden surface-subtle border border-border/20">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.section>

        {/* Project Info Cards */}
        <motion.section 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="surface-elevated rounded-xl p-6 border border-border/20 text-center">
            <User className="h-8 w-8 brand-accent mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Client</h3>
            <p className="text-body text-sm">{project.client}</p>
          </div>
          
          <div className="surface-elevated rounded-xl p-6 border border-border/20 text-center">
            <Calendar className="h-8 w-8 brand-accent mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Duration</h3>
            <p className="text-body text-sm">{project.duration}</p>
          </div>
          
          <div className="surface-elevated rounded-xl p-6 border border-border/20 text-center">
            <Target className="h-8 w-8 brand-accent mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Role</h3>
            <p className="text-body text-sm">{project.role}</p>
          </div>
          
          <div className="surface-elevated rounded-xl p-6 border border-border/20 text-center">
            <Zap className="h-8 w-8 brand-accent mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Team</h3>
            <p className="text-body text-sm">{project.team.length} members</p>
          </div>
        </motion.section>

        {/* Challenge & Solution */}
        <motion.section 
          className="grid lg:grid-cols-2 gap-8 mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="surface-elevated rounded-2xl p-8 border border-border/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
            <p className="text-body leading-relaxed text-lg">{project.challenge}</p>
          </div>
          
          <div className="surface-elevated rounded-2xl p-8 border border-border/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Solution</h2>
            <p className="text-body leading-relaxed text-lg">{project.solution}</p>
          </div>
        </motion.section>

        {/* Testimonial */}
        {project.testimonial && (
          <motion.section 
            className="mb-20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="surface-elevated rounded-2xl p-12 border border-border/20 text-center max-w-4xl mx-auto">
              <blockquote className="text-2xl text-body italic leading-relaxed mb-8">
                "{project.testimonial.text}"
              </blockquote>
              <div>
                <p className="font-bold text-foreground text-lg">{project.testimonial.author}</p>
                <p className="text-body">{project.testimonial.role}</p>
              </div>
            </div>
          </motion.section>
        )}

        {/* Technologies */}
        <motion.section 
          className="mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Tools & <span className="brand-accent">Technologies</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} className="surface-subtle text-body border border-border/30 px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.section>

      </div>
      
      {/* CTA Section - Full Width */}
      <motion.section 
        className="py-32 bg-gradient-to-br from-card via-background to-muted relative overflow-hidden"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
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
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center space-y-12">
              {/* Main Heading */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Let's Design Something Extraordinary Together
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  I turn ideas into experiences that people love. Ready to create your next big story?
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 p-6 rounded-full font-semibold group transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 text-lg hover:scale-105 overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
    </motion.main>
  );
};

export default ProjectDetail;