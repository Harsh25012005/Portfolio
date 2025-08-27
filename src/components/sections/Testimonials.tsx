import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "A thorough report was done on our financial situation of what insurance covers etc existing. Better deals were found. These were processed on our behalf, which took a lot of stress away. Updates were given as required and outstanding responses chased after.",
      author: "Jeannie Grant",
      date: "June 01, 2023",
      rating: 5
    },
    {
      id: 2,
      content: "I have been a client of Fairstone for 8 years now and have always found the advice provided by Ernie Brown excellent. Ernie always takes the time to explain things really clearly to me and ensures I understand and am well informed and therefore able to make appropriate decisions.",
      author: "Derval Russell",
      date: "November 09, 2023",
      rating: 5
    },
    {
      id: 3,
      content: "Claire has been excellent in helping me understand my pension and investment options. Her advice has been clear, professional and tailored to my specific needs. I would highly recommend her services.",
      author: "Sophie Williams",
      date: "October 15, 2023",
      rating: 5
    },
    {
      id: 4,
      content: "Outstanding service from start to finish. The team was professional, knowledgeable, and always available to answer my questions. They made the complex process simple and stress-free.",
      author: "Michael Chen",
      date: "December 12, 2023",
      rating: 5
    },
    {
      id: 5,
      content: "Exceptional attention to detail and personalized approach. They took the time to understand my unique situation and provided tailored solutions that exceeded my expectations.",
      author: "Sarah Johnson",
      date: "January 18, 2024",
      rating: 5
    },
    {
      id: 6,
      content: "Professional, reliable, and trustworthy. The advice I received was invaluable and has significantly improved my financial position. Highly recommended!",
      author: "David Thompson",
      date: "February 22, 2024",
      rating: 5
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
              CLIENT TESTIMONIALS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight max-w-2xl mx-auto sm:mx-0">
              Don't take our word for it,<br />
              see what our clients say
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto sm:mx-0">
              We're honored by the feedback, and it fuels our commitment to delivering exceptional 
              design services. Read the reviews to hear firsthand how our work is making a positive 
              impact on businesses. Your trust is our greatest achievement.
            </p>
          </div>

          {/* Testimonials Cards - Mobile Responsive */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-scroll-testimonials">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`} 
                  className="bg-card border border-border rounded-lg p-4 sm:p-6 flex-shrink-0 w-80 sm:w-96"
                >
                  <StarRating rating={testimonial.rating} />
                  
                  <blockquote className="text-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {testimonial.content}
                  </blockquote>

                  <div className="space-y-1">
                    <p className="font-semibold text-foreground text-sm sm:text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
