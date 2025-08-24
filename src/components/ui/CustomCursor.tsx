import { useState, useEffect } from 'react';

interface CustomCursorProps {
  isVisible: boolean;
}

const CustomCursor = ({ isVisible }: CustomCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isVisible) {
      document.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: mousePosition.x - 50,
        top: mousePosition.y - 50,
        transform: isVisible ? 'scale(1)' : 'scale(0)',
      }}
    >
      <div className="w-24 h-24 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-primary/20">
        <span className="text-primary-foreground text-xs font-medium text-center leading-tight">
          View<br />Project
        </span>
      </div>
    </div>
  );
};

export default CustomCursor;
