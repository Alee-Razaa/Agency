'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  focus: z.string(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type FormState = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    focus?: string[];
    message?: string[];
  };
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    focus: formData.get('focus'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Transmission failed. Please check the communication logs.',
    };
  }

  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log('Form submission received:', validatedFields.data);

  // In a real app, you'd send an email or save to a database here

  return {
    success: true,
    message: 'Request transmitted successfully. Our engineers will respond shortly.',
  };
}
