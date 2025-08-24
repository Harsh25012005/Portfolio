const AboutPreview = () => {
  const stats = [
    { value: "$80", label: "Flat hourly rate" },
    { value: "162", label: "Dev categories" },
    { value: "245+", label: "Completed project" },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-12">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
              Finding Certified,{" "}
              <br />
              Developers{" "}
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Hire the top developers in the world. We provide great opportunities for your website 
              development, with maximum speed and skill.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
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
