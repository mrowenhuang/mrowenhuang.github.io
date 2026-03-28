/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '../types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Github,
  Globe,
  Home,
  Layers,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  User
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  // {
  //   label: 'Reviews',
  //   link: '#testimonials',
  //   icon: MessageCircle,
  // },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/owen-huang-582b12213',
  },
  {
    icon: Github,
    label: 'Guthub',
    link: 'https://github.com/mrowenhuang',
  },
  // {
  //   icon: Twitter,
  //   label: 'Twitter',
  //   link: '/#',
  // },
  // {
  //   icon: Youtube,
  //   label: 'Youtube',
  //   link: '/#',
  // },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: './images/lab.svg',
    title: 'Palm Oil Laboratory App',
    tags: ['API', 'Development', 'SqfLite', 'OCR'],
    projectLink: '#',
  },
  {
    imgSrc: './images/produksi.svg',
    title: 'Stock Production Calculation App',
    tags: ['API', 'Development', 'SqfLite', 'OCR'],
    projectLink: '#',
  },
  {
    imgSrc: './images/ekspedisi.svg',
    title: 'Palm Oil Expedition App',
    tags: ['API', 'Development', 'SqfLite', 'OCR', 'NFC'],
    projectLink: '#',
  },
  {
    imgSrc: './images/timesheet.svg',
    title: 'Timesheet App',
    tags: ['API', 'Development', 'SqfLite'],
    projectLink: '#',
  },
  {
    imgSrc: './images/book.svg',
    title: 'Book App',
    tags: ['API', 'Development', 'Clean Architecture', 'Bloc', 'Firebase'],
    projectLink: 'https://github.com/mrowenhuang/clean_architecture_book_app',
  },
  {
    imgSrc: './images/music.svg',
    title: 'Music App',
    tags: [
      'API',
      'Development',
      'Clean Architecture',
      'Bloc',
      'Firebase',
      'Hive',
    ],
    projectLink: 'https://github.com/mrowenhuang/clean-music-app',
  },
];

const education: ExperienceType[] = [
  {
    year: '2022 – 2026',
    title: 'Bachelor of Computer Science',
    institute: 'University of Prima Indoneia',
    desc: 'Focused on web and mobile development, creating seamless user experiences across all platforms.',
  },
  {
    year: '2022 – 2023',
    title: 'Frontend Development',
    institute: 'Online Course',
    desc: 'Learned modern JavaScript, React, and responsive UI patterns through real-world projects.',
  },
  {
    year: '2023 – 2025',
    title: 'Mobile Frontend Development',
    institute: 'Online Course',
    desc: 'Learned modern Flutter and responsive UI patterns through real-world projects.',
  },
  {
    year: '2026',
    title: 'Advanced UI/UX Design Course',
    institute: 'Design+Code',
    desc: 'Explored advanced design systems, motion design, and accessibility best practices.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2022 – 2025',
    title: 'Frontend Developer',
    institute: 'Freelance',
    desc: 'Built and optimized responsive mobile app',
  },
  {
    year: '2025 – Present',
    title: 'Flutter Mobile Developer',
    institute: 'PT Indo Webhost Kreasi',
    desc: 'Developing high-performance cross-platform mobile applications and delivering tailored digital solutions for diverse B2B clients.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: './images/tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: './images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: './images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: './images/tools/react.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: './images/tools/javascript.svg',
  },
  {
    label: 'Flutter',
    imgSrc: './images/tools/icon_flutter.svg',
  },
  {
    label: 'Firebase',
    imgSrc: './images/tools/firebase.svg',
  },
  {
    label: 'Dart',
    imgSrc: './images/tools/dartlang-icon.svg',
  },
  {
    label: 'TypeScript',
    imgSrc: './images/tools/ts.svg',
  },
  {
    label: 'SqlLite',
    imgSrc: './images/tools/sqlite-svgrepo-com.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
    projects: '32 Projects',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: '47 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Crafting modern web applications with TypeScript, and responsive Tailwind CSS for optimal user experience across all devices.',
    projects: '58 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Development',

    desc: 'Expertly building robust, native-quality mobile applications for both iOS and Android from the ground up, ensuring smooth usability and high performance.',
    projects: '21 Projects',
    icon: (
      <div className='flex items-center gap-1'>
        <Smartphone className='h-6 w-6 text-green-400' />
      </div>
    ),
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
    projects: '15 Projects',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  // {
  //   number: '30+',
  //   label: 'Happy Clients',
  // },
  {
    number: '02+',
    label: 'Years Of Experience',
  },
  {
    number: '6+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  education,
  experience, navLinks, projectsData, services, socialLinks, statsData,
  testimonials, tools
};
