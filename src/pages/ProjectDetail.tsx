import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Target, Zap } from 'lucide-react';

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
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Back Button */}
          <Link to="/projects">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          {/* Project Header */}
          <section className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{project.category}</Badge>
                <Badge variant="outline">{project.year}</Badge>
                <Badge variant="outline">{project.status}</Badge>
              </div>
              
              <h1 className="text-display font-bold">{project.title}</h1>
              <p className="text-xl text-body leading-relaxed">{project.overview}</p>
            </div>

            <div className="flex items-center space-x-6">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Site
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </div>
          </section>

          {/* Hero Image */}
          <section>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Project Info Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 surface-elevated">
              <div className="space-y-2">
                <User className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Client</h3>
                <p className="text-body text-sm">{project.client}</p>
              </div>
            </Card>
            
            <Card className="p-6 surface-elevated">
              <div className="space-y-2">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Duration</h3>
                <p className="text-body text-sm">{project.duration}</p>
              </div>
            </Card>
            
            <Card className="p-6 surface-elevated">
              <div className="space-y-2">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Role</h3>
                <p className="text-body text-sm">{project.role}</p>
              </div>
            </Card>
            
            <Card className="p-6 surface-elevated">
              <div className="space-y-2">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Team</h3>
                <p className="text-body text-sm">{project.team.length} members</p>
              </div>
            </Card>
          </section>

          {/* Challenge & Solution */}
          <section className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 surface-elevated">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-body leading-relaxed">{project.challenge}</p>
            </Card>
            
            <Card className="p-8 surface-elevated">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-body leading-relaxed">{project.solution}</p>
            </Card>
          </section>

          {/* Results */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Results & Impact</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <Card key={index} className="p-6 surface-elevated text-center">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">{result.metric}</h3>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-primary">{result.after}</p>
                      <p className="text-xs text-muted-foreground">from {result.before}</p>
                      <Badge variant="secondary" className="text-xs">
                        {result.improvement}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Design Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.process.map((step, index) => (
                <Card key={index} className="p-6 surface-elevated">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold">{step.phase}</h3>
                    </div>
                    <p className="text-body text-sm">{step.description}</p>
                    <div className="space-y-1">
                      <p className="text-xs font-medium">Deliverables:</p>
                      {step.deliverables.map((deliverable) => (
                        <Badge key={deliverable} variant="outline" className="text-xs mr-1">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Project Gallery */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          {project.testimonial && (
            <section>
              <Card className="p-8 surface-elevated text-center max-w-4xl mx-auto">
                <div className="space-y-4">
                  <blockquote className="text-lg text-body italic leading-relaxed">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div className="space-y-1">
                    <p className="font-semibold">{project.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </section>
          )}

          {/* Technologies */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Tools & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Next Project CTA */}
          <section className="text-center space-y-6 py-12">
            <h2 className="text-3xl font-bold">Like What You See?</h2>
            <p className="text-xl text-body max-w-2xl mx-auto">
              Let's discuss how I can help bring your next project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  Start a Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View More Projects
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;