import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav
        className={cn(
          "container mx-auto transition-all duration-700 ease-in-out",
          isScrolled ? "max-w-2xl px-2" : "max-w-full px-8"
        )}
      >
        <div
          className={cn(
            "transition-all duration-700 ease-in-out rounded-full",
            isScrolled
              ? "bg-background/80 backdrop-blur-md border border-border shadow-lg p-2 pl-5 pr-3 mx-10 scale-95"
              : "bg-transparent p-2 pl-4 pr-2 mx-28 scale-100"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-foreground">
              HV
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "relative flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors font-medium",
                      isActive(item.path) && "text-foreground"
                    )}
                  >
                    {isActive(item.path) && (
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    )}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
          <div className="md:hidden mt-2">
            <div
              className={cn(
                "rounded-2xl px-6 py-4 transition-all duration-300",
                "bg-background/80 backdrop-blur-xl border border-border shadow-lg"
              )}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-3 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium",
                      isActive(item.path) && "text-foreground"
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
