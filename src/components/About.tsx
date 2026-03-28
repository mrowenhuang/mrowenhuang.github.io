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
        I am a Flutter Developer with over 2 years of experience in mobile
        application development. Since early 2025, I have become increasingly
        active in honing my skills and contributing to various challenging
        projects.
      </motion.p>
      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Professional Experience: Currently, I work as a custom application
        developer for a company using Flutter. In this role, I have gained
        valuable experience working on complex projects and interacting with new
        technologies that I had not previously encountered. This experience has
        significantly enhanced my technical and professional capabilities across
        various aspects of software development.
      </motion.p>
      <motion.p
        variants={fadeUp}
        className='mt-2 font-bold text-base text-neutral-300'
      >
        Skills and Expertise:
      </motion.p>
      <motion.ul
        variants={fadeUp}
        className='mt-2 text-neutral-300 list-disc list-inside space-y-2'
      >
        <li>
          <strong>Mobile Development:</strong> Flutter (Dart) - cross-platform
          application development
        </li>
        <li>
          <strong>Frontend Web:</strong> Responsive website development
          (self-taught and adapted to project needs)
        </li>
        <li>
          <strong>AI Integration:</strong> Experience in AI integration,
          including AI CCTV projects
        </li>
        <li>
          <strong>Project Management:</strong> Freelance experience managing
          projects from inception to deployment
        </li>
      </motion.ul>

      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Work Philosophy: I have a strong passion for learning and am always
        interested in exploring new technologies that can add value. Although my
        current primary focus is mobile development, I continue to expand my
        knowledge into frontend web development and AI integration. I believe
        that adaptability and a desire for continuous learning are key in the
        ever-evolving world of technology
      </motion.p>
      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Approach to Opportunities: I am always open to new opportunities and
        committed to completing every task with the highest quality. My
        freelance experience has shaped my ability to work independently, while
        my corporate experience has developed my team collaboration and
        problem-solving skills on a larger scale.
      </motion.p>
      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        I continually seek new challenges that can drive professional growth and
        contribute to the development of innovative technological solutions.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button
          className='mt-5'
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Contact Me
        </Button>
      </motion.div>
    </motion.section>
  );
};
