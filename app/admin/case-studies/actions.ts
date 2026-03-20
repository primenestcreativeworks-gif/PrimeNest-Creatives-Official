'use server'

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function deleteCaseStudy(id: string) {
  const supabase = await createClient();
  
  const { error } = await supabase.from('case_studies').delete().eq('id', id);
  
  if (error) {
    console.error('Delete Error:', error);
    return;
  }
  
  revalidatePath('/admin/case-studies');
  revalidatePath('/');
}
