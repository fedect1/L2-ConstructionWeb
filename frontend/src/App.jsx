
import Hero from './components/Hero';
import StickyNavbar from './components/StickyNavbar';

const App = () => {
  return (
    <main className='px-4 pt-6 max-w-screen-lg mx-auto'>
      <StickyNavbar />
      <Hero />
    </main>
  );
};

export default App;
