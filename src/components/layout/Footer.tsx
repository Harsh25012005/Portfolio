import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/harsh25012005',
      icon: <Github className="w-4 h-4" />
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/harsh-vaghela-9b0b3b1b2',
      icon: <Linkedin className="w-4 h-4" />
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/harsh25012005',
      icon: <Twitter className="w-4 h-4" />
    },
    { 
      name: 'Email', 
      href: 'mailto:contact@harshvaghela.tech',
      icon: <Mail className="w-4 h-4" />
    },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'About', path: '/about' },
    // { name: 'Projects', path: '/projects' },
    // { name: 'Services', path: '/services' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Social */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">HV</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Harsh Vaghela
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Full-stack developer and UI/UX enthusiast. I build exceptional digital experiences with modern technologies and clean code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-sm font-medium text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors hover:underline underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 md:col-start-10">
            <h4 className="text-sm font-medium text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vaghelaharsh1505@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors hover:underline underline-offset-4 flex items-start md:items-center space-x-2"
                >
                  <Mail className="w-4 h-4 mt-1 md:mt-0 flex-shrink-0" />
                  <span>vaghelaharsh1505@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {currentYear} Harsh Vaghela. All rights reserved.
          </p>
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground text-sm">
              Made <Heart className="inline w-3.5 h-3.5 text-red-500 fill-current" /> by Harsh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;