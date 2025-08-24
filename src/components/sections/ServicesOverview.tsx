import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Beautiful, functional interfaces that delight users and drive conversions.",
      number: "01",
    },
    {
      title: "Mobile Design",
      description:
        "Native and responsive mobile experiences optimized for all devices.",
      number: "02",
    },
    {
      title: "Web Design",
      description:
        "Responsive websites and web applications with modern design principles.",
      number: "03",
    },
    {
      title: "Design Systems",
      description:
        "Scalable design systems that ensure consistency across products.",
      number: "04",
    },
  ];

  return (
    <section className="py-32 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-20">
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              What I <span className="text-primary">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              I help businesses create exceptional digital experiences through
              thoughtful design and user research.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-b border-border pb-8 hover:border-primary/50 transition-colors"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <span className="text-lg font-mono text-muted-foreground group-hover:text-primary transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-1 flex justify-end">
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-16">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-lg font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
