import { fadeUp } from '@/lib/animation';
import { ProjectType } from '@/types';
import { motion } from 'motion/react';

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

      <div className='absolute bottom-0 p-2 flex gap-2'>
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className='bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer'
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
