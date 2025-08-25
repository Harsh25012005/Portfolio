import HeroSection from '@/components/sections/HeroSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ServicesOverview from '@/components/sections/ServicesOverview';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <ServicesOverview />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Home;