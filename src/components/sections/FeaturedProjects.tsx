import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Complete UX redesign that increased conversion rates by 108% and improved mobile experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'E-Commerce',
      tags: ['UX Design', 'Research', 'Prototyping'],
      metrics: '+108% conversion rate'
    },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      description: 'Intuitive dashboard design for healthcare professionals with focus on data visualization.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      category: 'Healthcare',
      tags: ['Dashboard', 'Data Viz', 'B2B'],
      metrics: '40% faster workflow'
    },
    {
      id: 3,
      title: 'Banking Mobile App',
      description: 'Secure and user-friendly mobile banking experience with enhanced accessibility features.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      category: 'Financial',
      tags: ['Mobile Design', 'Security', 'Accessibility'],
      metrics: '95% user satisfaction'
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Featured <span className="brand-accent">Work</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
              Here's a selection of projects that showcase my design process and the 
              impact of user-centered solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`project-card group ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className={`aspect-video overflow-hidden rounded-t-lg ${index === 0 ? 'lg:aspect-[2/1]' : ''}`}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs font-medium text-primary">
                      {project.metrics}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth text-sm font-medium"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center pt-8">
            <Link to="/projects">
              <Button size="lg" variant="outline" className="px-8">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;