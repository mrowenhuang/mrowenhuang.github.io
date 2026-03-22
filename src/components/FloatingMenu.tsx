import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { text } from 'stream/consumers';

export const FloatingMenu = () => {
  const [active, setActive] = useState('#hero');

  return (
    <div className='fixed right-10 top-1/2 -translate-y-1/2 bg-black border border-neutral-600 pt-4 rounded-full z-10 lg:block hidden'>
      {navLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            href={link.link}
            key={link.label}
            onClick={() => setActive(link.link)}
            className={
                cn('text-neutral-400 flex items-center gap-2 hover:text-primary transition-colors duration-500 mb-6 px-4',active === link.link && 'text-primary')
            }
          >
            <Icon className='size-5' />
          </a>
        );
      })}
    </div>
  );
};
