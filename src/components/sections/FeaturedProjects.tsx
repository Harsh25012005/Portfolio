import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      description:
        "Complete UX redesign that increased conversion rates by 108% and improved mobile experience.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      year: "2024",
      category: "E-Commerce",
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      description:
        "Intuitive dashboard design for healthcare professionals with focus on data visualization.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      year: "2024",
      category: "Healthcare",
    },
    {
      id: 3,
      title: "Banking Mobile App",
      description:
        "Secure and user-friendly mobile banking experience with enhanced accessibility features.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      year: "2023",
      category: "Financial",
    },
  ];

  return (
    <section className="py-32 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-20">
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Selected <span className="text-primary">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of projects that showcase my approach to solving
              complex design challenges.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted border">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-foreground group-hover:text-primary transition-colors">
                      <span className="font-medium">View Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects */}
          <div className="text-center pt-16">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-lg font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
