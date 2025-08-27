import { Card } from '@/components/ui/card';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { openEmailTemplate } from '@/utils/emailTemplate';

interface ContactMethod {
  icon: any;
  title: string;
  description: string;
  value: string;
  action?: string | (() => void);
  primary: boolean;
}

const Contact = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Send me an email and I\'ll get back to you',
      value: 'vaghelaharsh0807@gmail.com',
      action: () => openEmailTemplate('Project Inquiry from Portfolio'),
      primary: true
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Based in Gujarat, India',
      value: 'Available for remote work worldwide',
      primary: false
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'I typically respond within',
      value: '24 hours',
      primary: false
    }
  ];

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className={`p-8 text-center transition-all duration-300 hover:shadow-lg ${
                method.primary 
                  ? 'border-primary/50 bg-primary/5 hover:bg-primary/10' 
                  : 'hover:border-primary/30'
              }`}
            >
              <div className="flex flex-col items-center space-y-6">
                <div className={`p-4 rounded-full ${
                  method.primary 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <method.icon className="w-6 h-6" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{method.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {method.description}
                  </p>
                  
                  {method.action ? (
                    <button 
                      onClick={() => {
                        if (typeof method.action === 'function') {
                          method.action();
                        } else if (typeof method.action === 'string') {
                          window.open(method.action, '_blank');
                        }
                      }}
                      className="inline-flex items-center space-x-2 text-primary hover:underline font-medium"
                    >
                      <span>{method.value}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  ) : (
                    <p className="font-medium text-foreground">{method.value}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 bg-muted/50 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and bring your ideas to life.
            </p>
            <button 
              onClick={() => openEmailTemplate('Project Inquiry from Portfolio')}
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;