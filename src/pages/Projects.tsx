import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['all', 'web design', 'mobile app', 'dashboard', 'e-commerce'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with focus on user experience and conversion optimization.',
      image: '/api/placeholder/600/400',
      category: 'e-commerce',
      tags: ['UX Design', 'UI Design', 'Prototyping'],
      year: '2024',
      client: 'RetailCorp',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      description: 'Comprehensive dashboard for healthcare professionals to manage patient data and appointments.',
      image: '/api/placeholder/600/400',
      category: 'dashboard',
      tags: ['Dashboard Design', 'Data Visualization', 'User Research'],
      year: '2024',
      client: 'HealthTech Inc.',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Banking Mobile App',
      description: 'Intuitive mobile banking application with enhanced security and user-friendly interface.',
      image: '/api/placeholder/600/400',
      category: 'mobile app',
      tags: ['Mobile Design', 'Financial UX', 'Security Design'],
      year: '2023',
      client: 'SecureBank',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Creative Agency Website',
      description: 'Modern website redesign for a creative agency showcasing their portfolio and services.',
      image: '/api/placeholder/600/400',
      category: 'web design',
      tags: ['Web Design', 'Branding', 'Animation'],
      year: '2023',
      client: 'Creative Studio',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'SaaS Analytics Platform',
      description: 'Complex analytics dashboard with real-time data visualization and reporting features.',
      image: '/api/placeholder/600/400',
      category: 'dashboard',
      tags: ['SaaS Design', 'Analytics', 'Data Viz'],
      year: '2023',
      client: 'DataCorp',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      description: 'User-centric food delivery application with seamless ordering and tracking experience.',
      image: '/api/placeholder/600/400',
      category: 'mobile app',
      tags: ['Mobile UX', 'Food Tech', 'Location Services'],
      year: '2022',
      client: 'FoodieApp',
      status: 'Completed'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Header */}
          <section className="text-center space-y-6">
            <h1 className="text-display font-bold">
              Selected <span className="brand-accent">Projects</span>
            </h1>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
              Here's a curated selection showcasing my expertise and the achieved results.
            </p>
          </section>

          {/* Category Filter */}
          <section className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </section>

          {/* Projects Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="project-card group">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580582294-7c09b3e67b2d?w=600&h=400&fit=crop&crop=faces"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {project.year}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.client}</span>
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
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6 py-12">
            <h2 className="text-3xl font-bold">Interested in Working Together?</h2>
            <p className="text-xl text-body max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create impactful digital experiences.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-8">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Projects;