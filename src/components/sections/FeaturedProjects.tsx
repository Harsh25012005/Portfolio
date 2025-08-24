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
    <section className="py-32 bg-black text-white relative overflow-hidden">
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
            <h2 className="text-5xl font-bold text-white leading-tight">
              Selected Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
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
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-700 hover:scale-[1.02] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Project preview area */}
                    <div className="aspect-[16/10] mb-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/5 flex items-center justify-center overflow-hidden group-hover:border-white/10 transition-colors duration-500">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 left-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                          <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300" />
                          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-700" />
                        </div>

                        {/* Project title display */}
                        <div className="text-center">
                          <div className="text-white/60 text-2xl font-bold mb-2 group-hover:text-white/80 transition-colors duration-500">
                            {project.title}
                          </div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Project info */}
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-sm font-medium">
                          {project.category}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-white/50 text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          {project.year}
                        </span>

                        {/* Arrow icon */}
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-400/20 group-hover:border-emerald-400/30 transition-all duration-300">
                          <svg
                            className="w-4 h-4 text-white/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 17L17 7M17 7H7M17 7V17"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center pt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
