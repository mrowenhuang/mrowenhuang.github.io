import { education, experience, services, tools } from '@/constants';
import { fadeUp, staggerContainer } from '@/lib/animation';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { ServiceCard } from './ServiceCard';
import { ExpCard } from './ExpCard';
import { ToolsCard } from './ToolsCard';

export const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.6)}
      className='mt-30 scroll-mt-10 container mx-auto'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Educational and practical experience'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300 '
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste harum
        voluptates dolorem ratione pariatur eaque voluptatem rem, unde qui quia
        doloribus perferendis, obcaecati in, possimus repellat reprehenderit
        suscipit maxime!
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>
          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((item, i) => (
              <ExpCard
                item={item}
                key={i}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>
          <div className='space-y-8 border-border pl-6'>
            {experience.map((item, i) => (
              <ExpCard
                item={item}
                key={i}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className='my-16'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          My favorite tools
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className='grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5'
        >
          {tools.map((item, i) => (
            <ToolsCard
              item={item}
              key={i}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
