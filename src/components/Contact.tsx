import { fadeUp } from '@/lib/animation';
import { motion } from 'motion/react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { SectionHeader } from './SectionHeader';

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-30 scroll-mt-10'
      id='testimonials'
    >
      <SectionHeader
        subtitle='Contact'
        title={`Let's make something awesome together!`}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full mx-auto space-y-4 mt-10'
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField></FormField>
          </div>
        </form>
      </Form>
    </motion.section>
  );
};
