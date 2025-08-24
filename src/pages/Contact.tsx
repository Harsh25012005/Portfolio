import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Clock, Coffee } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@designer.com',
      href: 'mailto:hello@designer.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const availability = [
    {
      icon: Clock,
      title: 'Response Time',
      description: 'I typically respond within 24 hours'
    },
    {
      icon: Coffee,
      title: 'Coffee Chat',
      description: 'Always up for a virtual coffee discussion'
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="space-y-12 fade-in">
          {/* Header */}
          <section className="text-center space-y-6">
            <h1 className="text-display font-bold">
              Let's <span className="brand-accent">Connect</span>
            </h1>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 surface-elevated">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                  <p className="text-body">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-8 surface-elevated">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-smooth"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-body text-sm">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-8 surface-elevated">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Availability</h2>
                  
                  <div className="space-y-4">
                    {availability.map((item) => (
                      <div key={item.title} className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-body text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-8 surface-elevated">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Project Inquiry?</h3>
                  <p className="text-body text-sm">
                    For project inquiries, please include:
                  </p>
                  <ul className="text-body text-sm space-y-1 list-disc list-inside">
                    <li>Project timeline and budget</li>
                    <li>Brief description of your goals</li>
                    <li>Any existing brand guidelines</li>
                    <li>Target audience information</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;