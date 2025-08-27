import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Code2, Heart } from 'lucide-react';
import { handleEmailClick } from '@/utils/emailTemplate';

// Dribbble icon component
const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-7.512-1.508-7.512-1.508s-.669-1.482-1.479-3.156c3.239-1.329 6.718-.034 6.718-.034zM12 2.151c2.75 0 5.25 1.1 7.07 2.88 0 0-3.14-1.16-6.07.21-.65 1.17-1.28 2.25-1.28 2.25s-2.85-.61-6.14-.61c0-.42.05-.83.14-1.24C7.7 3.851 9.75 2.151 12 2.151zm-7.07 2.88C6.75 3.251 9.25 2.151 12 2.151c-.25 0-.49.01-.74.03-2 .15-3.8 1.05-5.33 2.46zm-.78 2.32c.09-.41.23-.8.41-1.17C6.25 5.031 8.5 5.651 12 5.651c0 0 .63-1.08 1.28-2.25 2.93-1.37 6.07-.21 6.07-.21-1.82-1.78-4.32-2.88-7.07-2.88-2.25 0-4.3 1.7-6.28 3.49-.09.41-.14.82-.14 1.24 3.29 0 6.14.61 6.14.61s.63-1.08 1.28-2.25c-.65 1.17-1.28 2.25-1.28 2.25s2.85-.61 6.14-.61c-.09.41-.23.8-.41 1.17-1.98-1.79-4.03-3.49-6.28-3.49z"/>
  </svg>
);

// Behance icon component
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 4.4v15.2h6.4c3.2 0 5.6-2.2 5.6-5.2 0-2.4-1.6-4-3.6-4.4 1.6-.4 2.8-1.8 2.8-3.6 0-2.8-2.2-4.8-5.2-4.8H0v2.8zm3.2 2.4h2.8c1.2 0 2 .8 2 1.8s-.8 1.8-2 1.8H3.2V6.8zm0 6.4h3.2c1.6 0 2.4 1 2.4 2.2s-.8 2.2-2.4 2.2H3.2v-4.4zm11.2-6.4h6.4v1.6h-6.4V6.8zm0 8.8c0 2.8 2.2 5.2 5.2 5.2 2.4 0 4.4-1.6 5-3.8h-2.8c-.4.8-1.2 1.2-2.2 1.2-1.6 0-2.4-1.2-2.4-2.6h7.6c0-3.6-2.2-6-5.2-6s-5.2 2.4-5.2 5.6v.4zm2.8-1.2c.2-1.2 1-2 2.4-2s2.2.8 2.4 2h-4.8z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'Dribbble', 
      href: 'https://dribbble.com/designer_figma',
      icon: <DribbbleIcon className="w-4 h-4" />
    },
    { 
      name: 'Behance', 
      href: 'https://www.behance.net/designerfigma25',
      icon: <BehanceIcon className="w-4 h-4" />
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/theuiux-studio-438b99335/',
      icon: <Linkedin className="w-4 h-4" />
    },
    { 
      name: 'Email', 
      href: '#',
      icon: <Mail className="w-4 h-4" />,
      onClick: (e: React.MouseEvent) => handleEmailClick(e.nativeEvent, 'Contact from Footer')
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
                  target={social.name === 'Email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent/50"
                  aria-label={social.name}
                  onClick={social.onClick}
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
                  href="mailto:vaghelaharsh0807@gmail.com"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors hover:underline underline-offset-4 flex items-start md:items-center space-x-2"
                >
                  <Mail className="w-4 h-4 mt-1 md:mt-0 flex-shrink-0" />
                  <span>vaghelaharsh0807@gmail.com</span>
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