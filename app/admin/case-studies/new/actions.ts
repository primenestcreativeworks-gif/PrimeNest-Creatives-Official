'use server'

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createCaseStudy(formData: FormData) {
  const supabase = await createClient();

  const client = formData.get('client') as string;
  const label = formData.get('label') as string;
  const headline = formData.get('headline') as string;
  const before = formData.get('before') as string;
  const after = formData.get('after') as string;
  const metric = formData.get('metric') as string;
  const image_url = formData.get('image_url') as string;
  
  const workStr = formData.get('work') as string;
  const work = workStr.split('\n').filter(w => w.trim() !== '');

  const { error } = await supabase.from('case_studies').insert({
    client,
    label,
    headline,
    before,
    after,
    metric,
    work,
    image_url: image_url || '/placeholder.png',
  });

  if (error) {
    console.error(error);
    throw new Error('Failed to create case study');
  }

  revalidatePath('/admin/case-studies');
  revalidatePath('/');
  redirect('/admin/case-studies');
}
