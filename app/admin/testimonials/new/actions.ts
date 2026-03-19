'use server'

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTestimonial(formData: FormData) {
  const supabase = await createClient();

  const name = formData.get('name') as string;
  const title = formData.get('title') as string;
  const role = formData.get('role') as string;
  const quote = formData.get('quote') as string;

  const { error } = await supabase.from('testimonials').insert({
    name,
    title,
    role,
    quote,
  });

  if (error) {
    console.error(error);
    throw new Error('Failed to create testimonial');
  }

  revalidatePath('/admin/testimonials');
  revalidatePath('/');
  redirect('/admin/testimonials');
}
