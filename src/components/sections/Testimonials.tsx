import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Working with this designer was exceptional. The UX redesign increased our conversion rates by over 100% and our users absolutely love the new interface. Highly recommended!",
      author: "Sarah Johnson",
      role: "VP of Product",
      company: "TechCorp Inc.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      id: 2,
      content: "The attention to detail and user research approach was impressive. Our mobile app now has a 4.8-star rating thanks to the improved user experience design.",
      author: "Michael Chen",
      role: "Founder",
      company: "StartupXYZ",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      id: 3,
      content: "Professional, creative, and results-driven. The design system created for our platform has saved our team countless hours and improved consistency across all products.",
      author: "Emily Rodriguez",
      role: "Design Director",
      company: "Digital Agency",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Client <span className="brand-accent">Testimonials</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
              Here's what clients say about working with me and the impact 
              of our collaborative design solutions.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className={`p-8 surface-elevated relative ${index === 1 ? 'lg:scale-105 lg:shadow-xl' : ''}`}
              >
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="p-2 bg-primary/10 rounded-lg w-fit">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-body leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <Avatar className="h-12 w-12">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Highlight for middle testimonial */}
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Featured
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <p className="text-body text-sm">Client Satisfaction</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="text-body text-sm">Happy Clients</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">100+</div>
              <p className="text-body text-sm">Projects Completed</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">5★</div>
              <p className="text-body text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;