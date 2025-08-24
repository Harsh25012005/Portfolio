import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@designer.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold brand-accent">UX Designer</h3>
            <p className="text-body text-sm leading-relaxed">
              Crafting purpose-driven experiences that inspire & engage. 
              Building pixel-perfect digital solutions that drive results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full surface-elevated hover:bg-primary hover:text-primary-foreground transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-body text-sm hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-sm text-body">
              <p>Available for freelance projects</p>
              <p>Let's create something amazing together</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth text-sm font-medium"
            >
              <span>Start a project</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-body text-sm">
            © {currentYear} UX Designer Portfolio. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-body text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;