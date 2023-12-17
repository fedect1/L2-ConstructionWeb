
import NewHero from './components/NewHero';
import Services from './components/Services';
import ServicesSection from './components/ServicesSection';
import StickyNavbar from './components/StickyNavbar';

const App = () => {
  return (
    <main className='px-4 pt-6 max-w-screen-lg mx-auto'>
      <StickyNavbar />
      <NewHero />
      <ServicesSection />
      <Services />
    </main>
  );
};

export default App;
