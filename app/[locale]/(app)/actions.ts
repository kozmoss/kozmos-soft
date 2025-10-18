"use server"

import { z } from 'zod';

import { saveContact } from '@/lib/db/queries';
import { ContactFormData } from '@/types/contact-us';

export interface ContactUsActionState {
    status: 'idle' | 'in_progress' | 'success' | 'failed' | 'invalid_data';
  }

  const contactFormSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    phone: z
      .string()
      .min(10)
      .regex(/^\+?[1-9]\d{1,14}$/),
    message: z
      .string()
      .min(10)
      .max(500),
  });

  export const contact = async (
    data: ContactFormData
  ): Promise<ContactUsActionState> => {
    try {
      const validatedData = contactFormSchema.parse(data);
  
      await saveContact({
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message,
      }
        );
  
      return { status: "success" };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { status: "invalid_data" };
      }
  
      return { status: "failed" };
    }
  };
  