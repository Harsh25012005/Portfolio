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
    <section className="py-16 sm:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Section Header */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              What I <span className="text-primary">Do</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto sm:mx-0">
              I help businesses create exceptional digital experiences through
              thoughtful design and user research.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-b border-border pb-6 sm:pb-8 hover:border-primary/50 transition-colors"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start sm:items-center">
                  <div className="sm:col-span-2 order-1 sm:order-1">
                    <span className="text-base sm:text-lg font-mono text-muted-foreground group-hover:text-primary transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <div className="sm:col-span-4 lg:col-span-3 order-2 sm:order-2">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="sm:col-span-5 lg:col-span-6 order-4 sm:order-3">
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="sm:col-span-1 order-3 sm:order-4 flex justify-start sm:justify-end">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {/* <div className="text-center pt-16">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-lg font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
