import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Award, Code, Palette, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    'Design Tools': ['Figma', 'Sketch', 'Adobe XD', 'Adobe Creative Suite', 'Principle', 'Framer'],
    'Research & Testing': ['User Interviews', 'Usability Testing', 'A/B Testing', 'Analytics', 'Surveys'],
    'Development': ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Responsive Design', 'Design Systems'],
    'Methodology': ['Design Thinking', 'Agile', 'Lean UX', 'Human-Centered Design', 'Service Design']
  };

  const experience = [
    {
      role: 'Senior UX Designer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      description: 'Leading design for enterprise SaaS products, managing design systems, and mentoring junior designers.'
    },
    {
      role: 'UX Designer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Designed user experiences for mobile apps and web platforms, conducted user research and usability testing.'
    },
    {
      role: 'UI Designer',
      company: 'Creative Studio',
      period: '2018 - 2020',
      description: 'Created visual designs for websites and mobile applications, collaborated with development teams.'
    }
  ];

  const values = [
    {
      icon: User,
      title: 'User-Centered',
      description: 'Every design decision starts with understanding user needs and behaviors.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries to create unique and impactful digital experiences.'
    },
    {
      icon: Code,
      title: 'Collaboration',
      description: 'Working closely with developers, stakeholders, and users throughout the process.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality, accessible, and inclusive designs.'
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={`space-y-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-display font-bold">
              About <span className="brand-accent">Me</span>
            </h1>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
              I'm a passionate UX Designer with over 5+ years of experience in design & development 
              with strong focus on producing high quality & impactful digital experiences.
            </p>
          </section>

          {/* Bio Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Journey</h2>
              <div className="space-y-4 text-body">
                <p>
                  I discovered my passion for UX design during my early career when I realized 
                  the power of creating meaningful connections between people and technology. 
                  What started as curiosity about user behavior evolved into a dedicated pursuit 
                  of crafting exceptional digital experiences.
                </p>
                <p>
                  My approach combines analytical thinking with creative problem-solving. 
                  I believe that great design is not just about aesthetics—it's about solving 
                  real problems and creating value for both users and businesses.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring new technologies, reading 
                  about psychology and human behavior, or contributing to design communities 
                  and mentoring upcoming designers.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <Card key={value.title} className="p-6 surface-elevated">
                  <value.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-body">{value.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 surface-elevated">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-body">{exp.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="p-6 surface-elevated">
                  <h3 className="font-semibold mb-4 text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6 py-12">
            <h2 className="text-3xl font-bold">Let's Work Together</h2>
            <p className="text-xl text-body max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth"
              >
                Get in Touch
              </a>
              <a 
                href="/projects" 
                className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-smooth"
              >
                View My Work
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;