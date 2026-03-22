import { projectsData, statsData } from '@/constants';
import { fadeUp, staggerContainer } from '@/lib/animation';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';

export const Project = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0.6)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader
        subtitle='Projects'
        title='My featured projects'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className=''
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
