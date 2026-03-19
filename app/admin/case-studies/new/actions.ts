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
  const imageFile = formData.get('image') as File | null;
  
  const workStr = formData.get('work') as string;
  const work = workStr.split('\n').filter(w => w.trim() !== '');

  let image_url = '/placeholder.png';

  if (imageFile && imageFile.size > 0) {
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `case-studies/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, imageFile);

    if (uploadError) {
      console.error('Upload Error:', uploadError);
      redirect(`/admin/case-studies/new?error=${encodeURIComponent('Failed to upload image: ' + uploadError.message)}`);
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    image_url = publicUrl;
  }

  const { error } = await supabase.from('case_studies').insert({
    client,
    label,
    headline,
    before,
    after,
    metric,
    work,
    image_url,
  });

  if (error) {
    console.error('Insert Error:', error);
    redirect(`/admin/case-studies/new?error=${encodeURIComponent('Failed to save to database: ' + error.message)}`);
  }

  revalidatePath('/admin/case-studies');
  revalidatePath('/');
  redirect('/admin/case-studies');
}
