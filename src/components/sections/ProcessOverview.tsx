import { Search, Lightbulb, Palette, TestTube, Rocket } from "lucide-react";

const ProcessOverview = () => {
  const processSteps = [
    {
      step: "01",
      icon: Search,
      title: "Discovery & Research",
      description: "Understanding your business goals, user needs, and market landscape through comprehensive research and stakeholder interviews.",
    },
    {
      step: "02",
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "Developing a clear design strategy, information architecture, and user journey maps based on research insights.",
    },
    {
      step: "03",
      icon: Palette,
      title: "Design & Prototyping",
      description: "Creating wireframes, high-fidelity designs, and interactive prototypes that bring your vision to life.",
    },
    {
      step: "04",
      icon: TestTube,
      title: "Testing & Iteration",
      description: "Validating designs through user testing, gathering feedback, and refining solutions for optimal user experience.",
    },
    {
      step: "05",
      icon: Rocket,
      title: "Launch & Support",
      description: "Delivering final designs, assets, and documentation for seamless development handoff and ongoing support.",
    },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-20">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
              My Design <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures every project delivers exceptional results through 
              user-centered design and iterative improvement.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
