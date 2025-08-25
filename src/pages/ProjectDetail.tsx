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

  // Project data based on ID
  const getProjectData = (projectId: string) => {
    const projects = {
      '1': {
        id: 1,
        title: 'Nike Shoes',
        client: 'Personal Project',
        year: '2025',
        duration: 'less then 8 Hours',
        role: 'UI/UX Designer',
        team: ['UX Designer', 'UI Designer', 'AR Developer', 'Product Manager'],
        status: 'Completed',
        category: 'UI UX Design',
        
        overview: 'A premium mobile application showcasing Nike latest sneaker collection with immersive 3D visualization. The app features a sleek, dark-themed interface that highlights product details and creates an engaging shopping experience. Users can explore shoes in stunning detail with interactive elements and smooth navigation designed for the modern sneaker enthusiast.',
        
        challenge: 'Creating an engaging mobile shopping experience that stands out in the crowded footwear app market. Traditional e-commerce apps often lack the visual impact needed to showcase premium sneakers effectively. Users struggle with limited product visualization, making it difficult to appreciate design details and quality. The challenge was to bridge the gap between physical and digital shopping experiences. Developing an interface that appeals to sneaker culture while maintaining usability across different demographics.',
        
        solution: 'Implemented a sophisticated 3D product visualization system that allows users to examine shoes from every angle. Designed a premium dark UI that emphasizes product imagery and creates a luxury shopping atmosphere. Integrated smooth animations and transitions that guide users naturally through the browsing experience. Added interactive elements like the floating compass navigation to enhance user engagement and exploration. Created a minimalist interface that puts the spotlight on Nike iconic designs while ensuring intuitive navigation.',
        
        results: [
          { metric: 'Return Rate', before: '35%', after: '18%', improvement: '-49%' },
          { metric: 'Conversion Rate', before: '3.2%', after: '7.8%', improvement: '+144%' },
          { metric: 'User Engagement', before: '2.5 min', after: '8.3 min', improvement: '+232%' },
          { metric: 'App Downloads', before: '0', after: '2.3M', improvement: 'New Launch' }
        ],
        
        tags: ['AR/VR', 'Mobile Design', 'E-commerce', 'iOS', 'Android'],
        
        images: [
          '/src/assets/nike-shoe.jpg',
          '/src/assets/nike-shoe.jpg',
          '/src/assets/nike-shoe.jpg'
        ],
        
        process: [
          {
            phase: 'Research',
            description: 'Analyzed user behavior patterns and conducted interviews with Nike customers about online shoe shopping challenges.',
            deliverables: ['User Research Report', 'Competitive Analysis', 'Technical Feasibility Study']
          },
          {
            phase: 'Concept',
            description: 'Developed AR interaction concepts and user journey mapping for the virtual try-on experience.',
            deliverables: ['Concept Designs', 'User Journey Maps', 'AR Prototypes']
          },
          {
            phase: 'Design',
            description: 'Created comprehensive UI designs, AR interface elements, and interaction patterns.',
            deliverables: ['UI Designs', 'Design System', 'AR Interface Guidelines']
          },
          {
            phase: 'Testing',
            description: 'Conducted usability testing with AR features and optimized for different lighting conditions.',
            deliverables: ['Usability Test Results', 'AR Performance Report', 'Launch Strategy']
          }
        ],
        
        technologies: ['Figma', 'ARKit', 'ARCore', 'Unity', 'React Native'],
        
        testimonial: {
          text: "The AR experience has revolutionized how our customers interact with our products. The app not only reduced returns but created a new level of engagement that we never thought possible.",
          author: "Michael Chen",
          role: "Digital Innovation Director, Nike"
        }
      },
      '2': {
        id: 2,
        title: 'Natsu.io',
        client: 'Personal Project',
        year: '2025',
        duration: 'Less then 16 Hours',
        role: 'UI/UX Designer',
        team: ['Product Designer', 'Motion Designer', '3D Artist'],         
        status: 'Completed',
        category: 'Web Design',
        
        overview: 'Natsu.io is an AI-powered platform that optimizes marketing strategies with automation, insights, and intelligent tools.It helps businesses transform complex data into clear, actionable strategies tailored to their goals.With an intuitive interface and powerful AI features, it makes marketing smarter, faster, and more effective. ',
        
        challenge: 'Businesses often struggle to create marketing strategies that balance creativity with data-driven precision.Traditional tools lack personalization, leaving campaigns ineffective and off-target. Managing multiple platforms and languages adds unnecessary complexity for teams. Time-consuming manual analysis slows down growth and decision-making. There was a need for a smarter, AI-first solution to simplify and optimize strategies.',
        
        solution: 'Natsu.io leverages AI automation to optimize marketing strategies with real-time insights.It provides advanced dashboards, multilingual support, and custom templates for efficiency.Businesses can analyze, plan, and execute campaigns seamlessly in one platform.Features like AI generation and integrated payment gateways streamline workflows. This results in smarter decisions, stronger engagement, and faster business growth.',
        
        results: [
          { metric: 'Engagement Time', before: '1.2 min', after: '4.7 min', improvement: '+292%' },
          { metric: 'Feature Exploration', before: '23%', after: '78%', improvement: '+239%' },
          { metric: 'Pre-order Clicks', before: '2.1%', after: '12.4%', improvement: '+490%' },
          { metric: 'Social Shares', before: '150/day', after: '2.3K/day', improvement: '+1433%' }
        ],
        
        tags: ['Product Design', 'Web Design', '3D Visualization', 'Animation'],
        
        images: [
          '/src/assets/MacBook Air (2022).png',
          '/src/assets/MacBook Air (2022).png',
          '/src/assets/MacBook Air (2022).png' 
        ],
        
        process: [
          {
            phase: 'Discovery',
            description: 'Analyzed Apple\'s design language and studied the MacBook Air\'s key selling points and target audience.',
            deliverables: ['Brand Analysis', 'Product Research', 'Audience Insights']
          },
          {
            phase: 'Concept',
            description: 'Developed interactive concepts focusing on 3D product visualization and storytelling.',
            deliverables: ['Concept Sketches', 'Interactive Prototypes', 'Animation Studies']
          },
          {
            phase: 'Design',
            description: 'Created high-fidelity designs with detailed 3D models and micro-interactions.',
            deliverables: ['Visual Designs', '3D Models', 'Animation Specifications']
          },
          {
            phase: 'Development',
            description: 'Collaborated with developers to implement smooth animations and optimize performance.',
            deliverables: ['Development Handoff', 'Performance Guidelines', 'Quality Assurance']
          }
        ],
        
        technologies: ['Figma', 'Blender', 'Three.js', 'GSAP', 'WebGL'],
        
        testimonial: {
          text: "The showcase perfectly captures the essence of our MacBook Air. The interactive experience has become a benchmark for how we present our products digitally.",
          author: "Lisa Park",
          role: "Senior Product Marketing Manager, Apple"
        }
      },
      '3': {
        id: 3,
        title: 'Furniture App',
        client: 'Personal Project',
        year: '2025',
        duration: 'Less then 10 Hours',
        role: 'UX/UI Designer',
        team: ['UX Designer', 'UI Designer', 'Product Manager', '3 Developers'],
        status: 'Completed',
        category: 'UI/UX Design',
        
        overview: 'A sophisticated mobile application that revolutionizes furniture shopping with "We Design Furniture For Your Comfort" as its core philosophy. The app features an elegant minimalist interface showcasing premium furniture pieces with immersive 3D visualization and tactile design elements. Users can explore comfortable, modern furniture options through an intuitive platform that emphasizes quality, comfort, and personalized interior design solutions.',
        
        challenge: 'Traditional furniture shopping lacks the tactile experience customers need to assess comfort and quality before purchasing. Online furniture retail struggles with visualization limitations, making it difficult for customers to envision products in their spaces. Users often face uncertainty about furniture dimensions, materials, and how pieces will integrate with existing decor. The challenge was creating a digital experience that conveys the physical comfort and quality of furniture. Developing trust in online furniture purchases while competing with established showroom experiences.',
        
        solution: 'Implemented advanced 3D furniture visualization that allows users to examine textures, materials, and construction details closely. Created an immersive interface with tactile design elements that mirror the comfort-focused brand messaging. Integrated augmented reality features enabling customers to visualize furniture in their actual living spaces. Developed detailed product specifications and comfort ratings to build confidence in purchasing decisions. Designed a clean, sophisticated UI that reflects the premium quality and comfort philosophy of the furniture brand.',
        
        results: [
          { metric: 'User Retention', before: '0%', after: '68%', improvement: 'New App' },
          { metric: 'Average Order Value', before: '$450', after: '$720', improvement: '+60%' },
          { metric: 'Customer Satisfaction', before: '3.2/5', after: '4.7/5', improvement: '+47%' },
          { metric: 'Return Rate', before: '28%', after: '12%', improvement: '-57%' }
        ],
        
        tags: ['Mobile App', 'AR/VR', 'E-commerce', 'Interior Design', 'iOS/Android'],
        
        images: [
          '/src/assets/furniture-app.jpg',
          '/src/assets/furniture-app.jpg',
          '/src/assets/furniture-app.jpg'
        ],
        
        process: [
          {
            phase: 'Research',
            description: 'Conducted extensive user research on furniture shopping behaviors and pain points.',
            deliverables: ['User Interviews', 'Market Research', 'Persona Development']
          },
          {
            phase: 'Strategy',
            description: 'Developed product strategy and feature prioritization based on user needs and business goals.',
            deliverables: ['Product Strategy', 'Feature Roadmap', 'User Journey Maps']
          },
          {
            phase: 'Design',
            description: 'Created comprehensive app designs with AR features and room planning tools.',
            deliverables: ['App Designs', 'AR Interface', 'Design System']
          },
          {
            phase: 'Testing',
            description: 'Conducted usability testing and iterated on AR features for optimal user experience.',
            deliverables: ['Usability Reports', 'AR Testing Results', 'Launch Preparation']
          }
        ],
        
        technologies: ['Figma', 'Sketch', 'ARKit', 'ARCore', 'Firebase'],
        
        testimonial: {
          text: "This app has transformed our business. Customers are more confident in their purchases, and we\'ve seen a significant increase in customer satisfaction and sales.",
          author: "David Rodriguez",
          role: "CEO, ComfortCo"
        }
      },
      '4': {
        id: 4,
        title: 'Real Estate Property',
        client: 'Personal Project',
        year: '2025',
        duration: 'Less then 12 Hours',
        role: 'UI/UX Designer',
        team: ['Solo Project'],
        status: 'Concept',
        category: 'Product Visualization',
        
        overview: 'A comprehensive real estate platform with the compelling message "Build Your Future One Property at a Time" that revolutionizes property investment and search. The website features a sophisticated interface with advanced search capabilities, detailed property listings, and immersive visual presentations of modern architectural properties. Users can explore investment opportunities through an intuitive platform that emphasizes long-term wealth building and strategic property acquisition.',
        
        challenge: 'Traditional real estate platforms overwhelm users with cluttered interfaces and limited search functionality, making property discovery inefficient. Investors struggle to find comprehensive data and market insights needed to make informed decisions about property investments. Users often face difficulty visualizing the potential and future value of properties without adequate presentation tools. The challenge was creating a platform that serves both casual buyers and serious investors with different information needs. Developing trust and credibility in a market where major financial decisions depend on accurate, up-to-date property information.',
        
        solution: 'Implemented an advanced property search system with intelligent filtering based on location, investment potential, and buyer preferences. Created stunning visual presentations featuring high-quality property photography and architectural details that showcase each property unique value. Integrated comprehensive market data, investment analytics, and future growth projections to support informed decision-making. Developed a clean, professional interface that builds trust while providing easy access to detailed property information and contact options. Designed responsive layouts that work seamlessly across desktop and mobile devices for property viewing on-the-go.',
        
        results: [
          { metric: 'Design Community Views', before: '0', after: '45K', improvement: 'Viral Post' },
          { metric: 'Social Engagement', before: '0', after: '3.2K', improvement: 'High Engagement' },
          { metric: 'Portfolio Inquiries', before: '2/month', after: '15/month', improvement: '+650%' },
          { metric: 'Industry Recognition', before: '0', after: '3 Awards', improvement: 'Featured Work' }
        ],
        
        tags: ['Product Design', 'Concept Design', '3D Visualization', 'Innovation'],
        
        images: [
          '/src/assets/MacBook.png',
          '/src/assets/MacBook.png',
          '/src/assets/MacBook.png'
        ],
        
        process: [
          {
            phase: 'Research',
            description: 'Analyzed current laptop market trends, emerging technologies, and user behavior patterns.',
            deliverables: ['Technology Research', 'Trend Analysis', 'User Insights']
          },
          {
            phase: 'Ideation',
            description: 'Brainstormed innovative concepts and explored various form factors and interaction methods.',
            deliverables: ['Concept Sketches', 'Ideation Sessions', 'Feasibility Studies']
          },
          {
            phase: 'Visualization',
            description: 'Created detailed 3D models and photorealistic renders to communicate the design vision.',
            deliverables: ['3D Models', 'Product Renders', 'Animation Studies']
          },
          {
            phase: 'Presentation',
            description: 'Developed comprehensive presentation materials and shared the concept with the design community.',
            deliverables: ['Presentation Deck', 'Social Media Content', 'Case Study']
          }
        ],
        
        technologies: ['Blender', 'KeyShot', 'Figma', 'After Effects', 'Photoshop'],
        
        testimonial: {
          text: "This concept work demonstrates exceptional design thinking and visualization skills. It\'s the kind of forward-thinking design that inspires our industry.",
          author: "Jennifer Walsh",
          role: "Design Director, Tech Startup"
        }
      }
    };
    
    return projects[projectId as keyof typeof projects];
  };

  const project = getProjectData(id || '1');

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
      <div className="max-w-6xl mx-auto px-6 py-16 pt-24">
        {/* Back Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Button variant="ghost" className="mb-12">
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
          className="flex justify-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
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