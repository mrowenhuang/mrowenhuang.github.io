import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Project } from "./components/Project";
import { Resume } from "./components/Resume";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Testimonial } from "./components/Testimonial";

export const App = () => {
  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero />
      <Stats />
      <Project />
      <About />
      <Services />
      <Resume />
      <Testimonial />
    </main>
  );
};
