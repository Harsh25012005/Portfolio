import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    // { name: "About", path: "/about" },
    // { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleThemeToggle = () => {
    if (!themeButtonRef.current) return;
    
    setIsAnimating(true);
    
    // Get button position for animation origin
    const rect = themeButtonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Create animation overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: ${y}px;
      left: ${x}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: ${theme === 'dark' ? '#ffffff' : '#000000'};
      z-index: 9999;
      pointer-events: none;
      transform: translate(-50%, -50%);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    
    document.body.appendChild(overlay);
    
    // Trigger animation
    requestAnimationFrame(() => {
      const maxRadius = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
      overlay.style.width = `${maxRadius * 2}px`;
      overlay.style.height = `${maxRadius * 2}px`;
    });
    
    // Change theme after a short delay
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 400);
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(overlay);
      setIsAnimating(false);
    }, 800);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
      <nav
        className={cn(
          "container mx-auto transition-all duration-700 ease-in-out",
          isScrolled ? "max-w-2xl px-2 sm:px-4" : "max-w-full px-4 sm:px-6 md:px-8"
        )}
      >
        <div
          className={cn(
            "transition-all duration-700 ease-in-out rounded-full",
            isScrolled
              ? "bg-background/80 backdrop-blur-md border border-border shadow-lg p-2 pl-5 pr-3 mx-2 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-20 scale-95"
              : "bg-transparent p-2 pl-4 pr-2 mx-2 sm:mx-6 md:mx-12 lg:mx-20 xl:mx-28 scale-100"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-xl sm:text-2xl font-bold text-foreground">
              HV
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-4 lg:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "relative flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-accent/50",
                      isActive(item.path) && "text-foreground"
                    )}
                  >
                    {isActive(item.path) && (
                      <motion.div 
                        className="w-2 h-2 bg-lime-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative">
                      {item.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center">
              {mounted && (
                <Button
                  ref={themeButtonRef}
                  variant="ghost"
                  size="icon"
                  onClick={handleThemeToggle}
                  disabled={isAnimating}
                  className="w-10 h-10 rounded-full hover:bg-muted transition-colors"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Moon className="h-5 w-5 text-muted-foreground" />
                  )}
                </Button>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden ml-2 w-10 h-10 rounded-full hover:bg-muted"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 mx-2 sm:mx-4">
            <div
              className={cn(
                "rounded-2xl px-4 sm:px-6 py-4 transition-all duration-300",
                "bg-background/90 backdrop-blur-xl border border-border shadow-lg"
              )}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-3 py-2 px-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all font-medium",
                      isActive(item.path) && "text-foreground bg-muted/30"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {isActive(item.path) && (
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    )}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
