import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PortfolioItemProps {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
}

export const PortfolioItem = ({ id, title, category, image, slug }: PortfolioItemProps) => {
  return (
    <motion.div 
      className="relative group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/project/${slug}`} className="block relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-medium mb-1">{title}</h3>
          <span className="text-muted-foreground text-sm">{category}</span>
        </div>
      </Link>
    </motion.div>
  );
};
