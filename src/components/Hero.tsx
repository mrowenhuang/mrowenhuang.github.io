import { fadeUp, staggerContainer } from '@/lib/animation';
import { SparkleIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 border gap-2 border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} /> <span>Introduction</span>
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16'
      >
        I'm <span className='text=primary'>Owen</span> UI/UX designer and
        frontend developer
      </motion.h1>
      <motion.div
        variants={fadeUp}
        className='flex gap-4 mt-2'
      >
        <Button
          onClick={() => {
            const projectSection = document.getElementById('projects');
            if (projectSection) {
              projectSection.scrollIntoView({
                behavior: 'smooth',
              });
            }
          }}
        >
          My Project
        </Button>
        <Button
          variant='outline'
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/my_resume_2.pdf';
            link.download = 'my_resume_2.pdf';
            link.click();
          }}
        >
          Download CV
        </Button>
      </motion.div>
    </motion.section>
  );
};
