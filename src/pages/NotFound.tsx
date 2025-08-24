import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold brand-accent">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-body max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button>
              Go Home
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline">
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
