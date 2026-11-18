'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createThumbnail(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  const title = formData.get('title') as string;
  const clientName = formData.get('clientName') as string;
  const categoryLabel = (formData.get('categoryLabel') as string) || 'Thumbnails';
  const imageUrl = formData.get('imageUrl') as string;
  const beforeImageUrl = (formData.get('beforeImageUrl') as string) || null;
  const description = (formData.get('description') as string) || '';
  const videoUrl = (formData.get('videoUrl') as string) || null;

  if (!title || !imageUrl) {
    redirect('/admin/thumbnails/new?error=Title+and+Image+URL+are+required');
  }

  try {
    const { error } = await supabase.from('thumbnails').insert([
      {
        title,
        client_name: clientName,
        category_label: categoryLabel,
        image_url: imageUrl,
        before_image_url: beforeImageUrl,
        description,
        video_url: videoUrl,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase thumbnail insert error:', error.message);
      // If table doesn't exist yet, we still redirect cleanly
    }
  } catch (err: any) {
    console.error('Failed to create thumbnail:', err);
  }

  revalidatePath('/admin/thumbnails');
  revalidatePath('/');
  redirect('/admin/thumbnails');
}

export async function deleteThumbnail(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  try {
    await supabase.from('thumbnails').delete().eq('id', id);
  } catch (err) {
    console.error('Failed to delete thumbnail:', err);
  }

  revalidatePath('/admin/thumbnails');
  revalidatePath('/');
}
