import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Clock, Coffee, ArrowRight, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

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
    
    try {
      // Create email content
      const emailContent = `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
        
        ---
        Sent from Portfolio Contact Form
      `;
      
      // Create Gmail compose link with pre-filled content
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=vaghelaharsh0807@gmail.com&su=${encodeURIComponent('Portfolio Contact: ' + formData.subject)}&body=${encodeURIComponent(emailContent)}`;
      
      // Open Gmail
      window.open(gmailLink, '_blank');
      
      // Also log the form data for backup
      console.log('Contact form submission:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString()
      });
      
      toast({
        title: "Email client opened!",
        description: "Your default email app should open with the message pre-filled. Please send it to complete your inquiry.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error processing form:', error);
      toast({
        title: "Error",
        description: "There was an issue processing your message. Please try emailing directly at vaghelaharsh0807@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vaghelaharsh0807@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vaghelaharsh0807@gmail.com&su=Project%20Inquiry&body=Hi%20Harsh,%0D%0A%0D%0AI%27m%20interested%20in%20working%20with%20you%20on%20a%20project.%20Here%20are%20the%20details:%0D%0A%0D%0AName:%20%0D%0AEmail:%20%0D%0AProject%20Type:%20%0D%0ATimeline:%20%0D%0ABudget%20Range:%20%0D%0A%0D%0AProject%20Description:%0D%0A%0D%0A%0D%0ABest%20regards,',
      description: 'Drop me a line anytime'
    },
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
    <motion.main 
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-accent/15 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <motion.section 
            className="text-center space-y-8 mb-20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                GET IN TOUCH
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let's Create Something
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I'm here to help you create digital experiences 
              that inspire, engage, and deliver results. Let's start the conversation.
            </p>
          </motion.section>

          {/* Creative Email Button Section */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-card/30 via-card/50 to-muted/30 backdrop-blur-xl border border-border/20 shadow-2xl">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-40 h-40 bg-gradient-to-tl from-accent/25 to-primary/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-primary/10 via-accent/15 to-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
              </div>

              <div className="relative z-10 p-12 lg:p-16 text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-8"
                >
                  {/* Icon */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="w-12 h-12 text-primary" />
                  </motion.div>

                  {/* Heading */}
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                      Ready to Start Your
                      <br />
                      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        Next Project?
                      </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                      Let's discuss your ideas and create something amazing together. 
                      Drop me an email and I'll get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Creative Email Button */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="pt-8"
                  >
                    <motion.a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=vaghelaharsh0807@gmail.com&su=Project Inquiry&body=Hi Harsh,%0D%0A%0D%0AI'm interested in working with you on a project. Here are the details:%0D%0A%0D%0AName: %0D%0AEmail: %0D%0AProject Type: %0D%0ATimeline: %0D%0ABudget Range: %0D%0A%0D%0AProject Description:%0D%0A%0D%0A%0D%0ABest regards,"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Button Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Button Content */}
                      <div className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground px-12 py-6 rounded-full font-bold text-xl shadow-2xl group-hover:shadow-primary/50 transition-all duration-300 flex items-center space-x-3">
                        <Mail className="w-6 h-6" />
                        <span>Send Me an Email</span>
                        <motion.div
                          className="w-6 h-6"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-6 h-6" />
                        </motion.div>
                      </div>

                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out rounded-full"></div>
                    </motion.a>
                  </motion.div>

                  {/* Email Address Display */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="pt-6"
                  >
                    <p className="text-muted-foreground">
                      Or email me directly at{" "}
                      <a 
                         href='https://mail.google.com/mail/?view=cm&fs=1&to=vaghelaharsh0807@gmail.com&su=Project%20Inquiry&body=Hi%20Harsh,%0D%0A%0D%0AI%27m%20interested%20in%20working%20with%20you%20on%20a%20project.%20Here%20are%20the%20details:%0D%0A%0D%0AName:%20%0D%0AEmail:%20%0D%0AProject%20Type:%20%0D%0ATimeline:%20%0D%0ABudget%20Range:%20%0D%0A%0D%0AProject%20Description:%0D%0A%0D%0A%0D%0ABest%20regards,' 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline underline-offset-4 transition-all duration-300"
                      >
vaghelaharsh0807@gmail.com
                      </a>
                    </p>
                  </motion.div>

                  {/* Quick Info */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="grid md:grid-cols-2 gap-6 pt-8 max-w-2xl mx-auto"
                  >
                    <div className="flex items-center space-x-3 justify-center md:justify-start">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">Quick Response</p>
                        <p className="text-muted-foreground text-sm">Within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 justify-center md:justify-start">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                        <Coffee className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">Free Consultation</p>
                        <p className="text-muted-foreground text-sm">Let's discuss your project</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;