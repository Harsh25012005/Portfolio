import HeroSection from '@/components/sections/HeroSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import AboutPreview from '@/components/sections/AboutPreview';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ProcessOverview from '@/components/sections/ProcessOverview';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <ServicesOverview />
      <ProcessOverview />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Home;