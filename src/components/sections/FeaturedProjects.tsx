import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import nikeShoe from "../../assets/nike-shoe.jpg";
import macbookAir from "../../assets/MacBook Air (2022).png";
import furnitureApp from "../../assets/furniture-app.jpg";
import macbookPro from "../../assets/MacBook.png";

const FeaturedProjects = () => {

  const featuredProjects = [
    {
      id: 1,
      title: "Nike AR Experience",
      category: "Mobile App Design",
      year: "2024",
      image: nikeShoe,
      bgColor: "bg-gradient-to-br from-gray-900 to-gray-800",
      size: "large",
    },
    {
      id: 2,
      title: "MacBook Air Showcase",
      category: "Product Design",
      year: "2024",
      image: macbookAir,
      bgColor: "bg-gradient-to-br from-slate-200 to-slate-100",
      size: "large",
    },
    {
      id: 3,
      title: "Furniture Design App",
      category: "UI/UX Design",
      year: "2024",
      image: furnitureApp,
      bgColor: "bg-gradient-to-br from-blue-200 to-blue-100",
      size: "large",
    },
    {
      id: 4,
      title: "MacBook Pro Concept",
      category: "Product Visualization",
      year: "2024",
      image: macbookPro,
      bgColor: "bg-gradient-to-br from-gray-300 to-gray-200",
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
                    <div className="aspect-[16/10] mb-6 border border-border flex items-center justify-center overflow-hidden rounded-xl">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        ) : (
                          /* Project title display for placeholder projects */
                          <div className="text-center">
                            <div className="text-muted-foreground text-2xl font-bold mb-2">
                              {project.title}
                            </div>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto opacity-60" />
                          </div>
                        )}
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
