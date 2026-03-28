import { fadeUp } from '@/lib/animation';
import { ToolsType } from '@/types';
import { motion } from 'motion/react';

export const ToolsCard = ({ item }: { item: ToolsType }) => {
  return (
    <motion.div
      variants={fadeUp}
      className='border border-neutral-700 rounded-md flex justify-center items-center flex-col py-4'
    >
      <img
        src={item.imgSrc}
        alt={item.label}
        className='h-12 w-12'
      />

      <p className='font-bold mt-2 '>{item.label}</p>
    </motion.div>
  );
};
