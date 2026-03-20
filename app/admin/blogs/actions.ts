'use server'

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function deleteBlog(id: string) {
  const supabase = await createClient();
  
  const { error } = await supabase.from('blogs').delete().eq('id', id);
  
  if (error) {
    console.error('Delete Error:', error);
    return;
  }
  
  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  revalidatePath('/');
}
