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

  if (imageFile && imageFile.size > 0) {
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `blogs/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, imageFile);

    if (uploadError) {
      console.error('Upload Error:', uploadError);
      throw new Error(`Failed to upload image: ${uploadError.message}`);
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    image_url = publicUrl;
  }

  // Build insert payload without image_url first to be safe, if we determine the table has image_url we can include it.
  // Generally blogs have a featured image.
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
    console.error(error);
    throw new Error(`Failed to create blog: ${error.message}`);
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  revalidatePath('/');
  redirect('/admin/blogs');
}
