'use server'

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBlogPost(formData: FormData) {
  const supabase = await createClient();

  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const status = formData.get('status') as string;
  const content = formData.get('content') as string;
  const imageFile = formData.get('image') as File | null;
  
  let image_url = null;

  if (imageFile && imageFile.size > 0 && imageFile.name && imageFile.name !== 'undefined') {
    const fileExt = imageFile.name.split('.').pop() || 'png';
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `blogs/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, imageFile);

    if (uploadError) {
      console.error('Upload Error:', uploadError);
      redirect(`/admin/blogs/new?error=${encodeURIComponent('Failed to upload image: ' + uploadError.message)}`);
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    image_url = publicUrl;
  }

  const payload: any = {
    title,
    author,
    status,
    content,
  };
  
  if (image_url) {
    payload.image_url = image_url;
  }

  const { error } = await supabase.from('blogs').insert(payload);

  if (error) {
    console.error('Insert Error:', error);
    redirect(`/admin/blogs/new?error=${encodeURIComponent('Failed to save to database: ' + error.message)}`);
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  revalidatePath('/');
  redirect('/admin/blogs');
}
