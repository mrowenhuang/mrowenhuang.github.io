import { fadeUp, staggerContainer } from '@/lib/animation';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Button } from './ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.6)}
      className='mt-30 scroll-mt-10 container mx-auto'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Transforming complexity into effortless design'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        officia dolorum possimus optio aut consequuntur sunt rerum, perspiciatis
        a qui exercitationem, eligendi veritatis maxime temporibus ad, itaque
        aliquid? Pariatur modi porro consequatur esse, maiores illo facere harum
        ut, laudantium alias dicta quibusdam nisi perspiciatis excepturi! Sit
        repudiandae sequi consequuntur, excepturi quae consectetur vel harum
        nostrum, adipisci voluptatum sint, animi quos. Impedit placeat,
        architecto cupiditate illo illum delectus dolor nostrum, autem libero
        quas molestias quasi eaque fugiat hic iste cum nemo commodi error
        eligendi soluta qui reprehenderit, laboriosam debitis. Facere molestias
        veritatis doloribus esse voluptas quae dolore explicabo pariatur impedit
        aperiam.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        quasi! Illo aliquam voluptatem a laudantium illum repellat, praesentium
        aperiam, itaque atque eius aliquid nisi rerum! Sunt magni officia quis
        maiores!
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};
