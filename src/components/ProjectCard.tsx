import { fadeUp } from '@/lib/animation';
import { ProjectType } from '@/types';
import { motion } from 'motion/react';

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <motion.div
      variants={fadeUp}
      className='relative'
    >
      <a
        href={project.projectLink}
        target='_blank'
        onClick={(e) => {
          if (project.projectLink === '#') {
            e.preventDefault();
          }
        }}
      >
        <figure className='overflow-hidden rounded-md'>
          <img
            src={project.imgSrc}
            alt={project.title}
            className='rounded-md transition duration-500 hover:scale-115 w-full'
          />
        </figure>

        <div className='absolute right-0  top-0 p-2 flex gap-2'>
          <span className='bg-background py-1 px-2 rounded-full hover:bg-primary hover:text-black '>
            {project.title}
          </span>
        </div>

        <div className='absolute bottom-0 p-2 flex gap-2'>
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className='bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer items-center justify-center flex text-center'
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
};
