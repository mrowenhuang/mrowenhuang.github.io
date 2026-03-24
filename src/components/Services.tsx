import { services } from '@/constants';
import { fadeUp, staggerContainer } from '@/lib/animation';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.6)}
      className='mt-30 scroll-mt-10 container mx-auto'
      id='services'
    >
      <SectionHeader
        subtitle='Services'
        title='Building with Purpose & Precision'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
      >
        {services.map((service, i) => (
          <motion.div
            variants={fadeUp}
            key={i}
          >
            <ServiceCard
              service={service}
              key={i}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
