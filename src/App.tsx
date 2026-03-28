import Lenis from 'lenis';
import { useEffect } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Project } from './components/Project';
import { Resume } from './components/Resume';
import { Services } from './components/Services';
import { Stats } from './components/Stats';

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero />
      <Stats />
      <Project />
      <About />
      <Services />
      <Resume />
      {/* <Testimonial /> */}
      <Contact />
    </main>
  );
};
