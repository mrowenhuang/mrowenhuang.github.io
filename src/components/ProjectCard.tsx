import { fadeUp } from '@/lib/animation';
import { ProjectType } from '@/types';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <motion.div
      variants={fadeUp}
      className='relative'
    >
      <figure className='overflow-hidden rounded-md'>
        <img
          src={project.imgSrc}
          alt={project.title}
          className='rounded-md transition duration-500 hover:scale-115 w-full'
        />
      </figure>
    </motion.div>
  );
};
