const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "Working with this designer was exceptional. The UX redesign increased our conversion rates by over 100% and our users absolutely love the new interface.",
      author: "Sarah Johnson",
      role: "VP of Product",
      company: "TechCorp Inc.",
    },
    {
      id: 2,
      content:
        "The attention to detail and user research approach was impressive. Our mobile app now has a 4.8-star rating thanks to the improved user experience design.",
      author: "Michael Chen",
      role: "Founder",
      company: "StartupXYZ",
    },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-20">
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-[34px] font-bold text-foreground leading-tight">
              What Clients <span className="text-primary">Say</span>
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-2 gap-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="space-y-8">
                <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="space-y-2">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-border">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                98%
              </div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                50+
              </div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                100+
              </div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                5★
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
