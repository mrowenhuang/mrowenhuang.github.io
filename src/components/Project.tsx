import { projectsData } from '@/constants';
import { staggerContainer } from '@/lib/animation';
import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { SectionHeader } from './SectionHeader';

export const Project = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.6)}
      className='mt-30 scroll-mt-10 container mx-auto'
      id='projects'
    >
      <SectionHeader
        subtitle='Projects'
        title='My featured projects'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.5)}
        className='
        grid md:grid-cols-2 gap-10 mt-10'
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            project={project}
            key={i}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
