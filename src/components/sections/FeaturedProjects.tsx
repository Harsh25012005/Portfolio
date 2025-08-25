import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedProjects = () => {

  const featuredProjects = [
    {
      id: 1,
      title: "Aora",
      category: "Development",
      year: "2024",
      image: "/api/placeholder/400/300",
      bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-100",
      size: "large",
    },
    {
      id: 2,
      title: "Code Screenshot",
      category: "Development & Design",
      year: "2024",
      image: "/api/placeholder/400/300",
      bgColor: "bg-gradient-to-br from-pink-200 to-pink-100",
      size: "large",
    },
    {
      id: 3,
      title: "iPhone 15 Pro",
      category: "Development & Design",
      year: "2024",
      image: "/api/placeholder/400/300",
      bgColor: "bg-gradient-to-br from-gray-200 to-gray-100",
      size: "large",
    },
    {
      id: 4,
      title: "Ochi Design",
      category: "Development & Design",
      year: "2024",
      image: "/api/placeholder/400/300",
      bgColor: "bg-gradient-to-br from-green-200 to-green-100",
      size: "large",
    },
  ];

  return (
    <section className="py-32 bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                MY WORK
              </span>
            </div>
            <h2 className="hero-text text-5xl font-bold leading-tight">
              Selected Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Here's a curated selection showcasing my expertise and the
              achieved results.
            </p>
          </div>

          {/* Projects Masonry Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden">
                  {/* Gradient overlay removed */}

                  {/* Content */}
                  <div className="relative">
                    {/* Project preview area */}
                    <div className="aspect-[16/10] mb-6 border border-border flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full flex items-center justify-center rounded-xl">
                        {/* Project title display */}
                        <div className="text-center">
                          <div className="text-muted-foreground text-2xl font-bold mb-2">
                            {project.title}
                          </div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto opacity-60" />
                        </div>
                      </div>
                    </div>

                    {/* Project info */}
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium">
                          {project.category}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground text-xs font-medium px-3 py-1 rounded-full bg-muted border border-border">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects Button
          <div className="text-center pt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-5 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div> */}
        </div>
      </div>

    </section>
  );
};

export default FeaturedProjects;
