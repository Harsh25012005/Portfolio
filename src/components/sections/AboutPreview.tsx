import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Users, Target, Zap } from "lucide-react";

const AboutPreview = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Target, label: "Projects Delivered", value: "100+" },
    { icon: Zap, label: "Avg. Conversion Boost", value: "85%" },
  ];

  const values = [
    {
      title: "User-Centered Approach",
      description:
        "Every design decision is backed by user research and data-driven insights.",
    },
    {
      title: "Collaborative Process",
      description:
        "Working closely with stakeholders to ensure alignment and shared vision.",
    },
    {
      title: "Measurable Impact",
      description:
        "Focusing on outcomes that drive real business value and user satisfaction.",
    },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-[34px] font-bold text-foreground leading-tight">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-[18px] text-muted-foreground leading-relaxed">
                I'm a passionate UI Designer with over 5+ years of experience
                creating meaningful digital experiences that solve real problems
                and drive business growth.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey started with a curiosity about human behavior and
                technology. Today, I specialize in transforming complex problems
                into intuitive, accessible digital solutions that users love.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe great design is invisible - it just works. My approach
                combines user research, creative problem-solving, and attention
                to detail to create experiences that feel effortless and
                delightful.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-lg font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span>More About Me</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-foreground">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
