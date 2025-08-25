import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'production', name: 'Production' },
    { id: 'sound-design', name: 'Sound Design' },
    { id: 'music-video', name: 'Music Video' },
    { id: 'tv-show', name: 'TV Show' },
  ];

  const projects = [
    {
      id: '01',
      title: 'Dreamers Picnic',
      category: 'production',
      status: 'Full case',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&auto=format&fit=crop&q=80'
      ]
    },
    {
      id: '02',
      title: 'Echoes of the Mountains',
      category: 'sound-design',
      status: 'Full case',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&auto=format&fit=crop&q=80'
      ]
    },
    {
      id: '03',
      title: 'The Hidden Petals',
      category: 'music-video',
      status: 'Full case',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&auto=format&fit=crop&q=80'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);


  return (
    <motion.main 
      className="min-h-screen surface-elevated text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <motion.header 
          ref={headerRef}
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={isHeaderInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-text mb-6">
            Featured <span className="brand-accent">Projects</span>
          </h1>
          <p className="text-body text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated collection of creative works that showcase innovation, 
            craftsmanship, and attention to detail across various disciplines.
          </p>
        </motion.header>

        {/* Category Navigation */}
        <motion.nav 
          className="flex justify-center gap-8 mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={isHeaderInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                'nav-link text-lg font-medium py-2',
                activeFilter === category.id ? 'active' : ''
              )}
            >
              {category.name}
            </button>
          ))}
        </motion.nav>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={container}
          initial="hidden"
          animate={isHeaderInView ? "show" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Project Card */}
                <div className="project-card surface-elevated border border-border/20 p-6 h-full">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-sm font-mono text-muted-foreground tracking-wider">
                        {project.id}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-1 group-hover:brand-accent transition-smooth">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>{project.status}</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Project Images Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.images.slice(0, 4).map((image, imageIndex) => (
                      <motion.div
                        key={imageIndex}
                        className="aspect-square overflow-hidden rounded-lg surface-subtle"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={image}
                          alt={`${project.title} ${imageIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Category */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium surface-subtle text-body border border-border/30">
                      {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                    <motion.button
                      className="w-8 h-8 rounded-full surface-subtle border border-border/30 flex items-center justify-center text-muted-foreground hover:brand-accent hover:border-primary transition-smooth"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.section 
          className="text-center surface-subtle rounded-3xl p-16 border border-border/20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Create Something
            <span className="block brand-accent">Extraordinary?</span>
          </h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with the same passion and attention to detail you see in our work.
          </p>
          <Button 
            size="lg" 
            className="px-10 py-4 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-bounce group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Projects;