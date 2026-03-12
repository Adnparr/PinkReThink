import SharedHeader from '../../components/SharedHeader';
import SharedFooter from '../../components/SharedFooter';
import HeroSection from './components/HeroSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FeaturedCoursesSection from './components/FeaturedCoursesSection';
import CtaNewsletterSection from './components/CtaNewsletterSection';

export default function LandingPage() {
  return (
    <div className="layout-container flex h-full grow flex-col min-h-screen">
      <SharedHeader />
      
      <main className="flex-grow">
        <HeroSection />
        <WhyChooseUsSection />
        <FeaturedCoursesSection />
        <CtaNewsletterSection />
      </main>
      
      <SharedFooter />
    </div>
  );
}
