import { Card } from "@/components/ui/card";
import { Search, Lightbulb, Palette, TestTube, Rocket } from "lucide-react";

const ProcessOverview = () => {
  const processSteps = [
    {
      step: "01",
      icon: Search,
      title: "Discovery & Research",
      description:
        "Understanding your business goals, user needs, and market landscape through comprehensive research and stakeholder interviews.",
      deliverables: [
        "User Research",
        "Competitive Analysis",
        "Requirements Gathering",
      ],
      duration: "1-2 weeks",
    },
    {
      step: "02",
      icon: Lightbulb,
      title: "Strategy & Planning",
      description:
        "Developing a clear design strategy, information architecture, and user journey maps based on research insights.",
      deliverables: [
        "Design Strategy",
        "User Personas",
        "Information Architecture",
      ],
      duration: "1 week",
    },
    {
      step: "03",
      icon: Palette,
      title: "Design & Prototyping",
      description:
        "Creating wireframes, high-fidelity designs, and interactive prototypes that bring your vision to life.",
      deliverables: ["Wireframes", "Visual Designs", "Interactive Prototypes"],
      duration: "3-4 weeks",
    },
    {
      step: "04",
      icon: TestTube,
      title: "Testing & Iteration",
      description:
        "Validating designs through user testing, gathering feedback, and refining solutions for optimal user experience.",
      deliverables: ["Usability Testing", "Design Iterations", "Test Reports"],
      duration: "2 weeks",
    },
    {
      step: "05",
      icon: Rocket,
      title: "Launch & Support",
      description:
        "Delivering final designs, assets, and documentation for seamless development handoff and ongoing support.",
      deliverables: ["Design Assets", "Style Guide", "Developer Handoff"],
      duration: "1 week",
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-[34px] font-bold">
              My Design <span className="brand-accent">Process</span>
            </h2>
            <p className="text-[18px] text-body max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures every project delivers
              exceptional results through user-centered design and iterative
              improvement.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="surface-elevated overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-1 bg-primary/5 p-8 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="text-6xl font-bold text-primary/20">
                      {step.step}
                    </div>
                    <div className="p-4 bg-primary/10 rounded-full">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {step.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-4 p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-body leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      {step.deliverables.map(
                        (deliverable, deliverableIndex) => (
                          <div
                            key={deliverableIndex}
                            className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm font-medium">
                              {deliverable}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Progress Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center pb-8">
                    <div className="w-px h-8 bg-border"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Process Benefits */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <Card className="p-6 surface-elevated text-center">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">100%</div>
                <h4 className="font-semibold">User-Centered</h4>
                <p className="text-body text-sm">
                  Every decision is validated through user research and testing
                </p>
              </div>
            </Card>

            <Card className="p-6 surface-elevated text-center">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">48h</div>
                <h4 className="font-semibold">Quick Response</h4>
                <p className="text-body text-sm">
                  Fast feedback loops and regular communication throughout
                </p>
              </div>
            </Card>

            <Card className="p-6 surface-elevated text-center">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">3x</div>
                <h4 className="font-semibold">Faster Results</h4>
                <p className="text-body text-sm">
                  Proven process reduces time to market and iterations
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
