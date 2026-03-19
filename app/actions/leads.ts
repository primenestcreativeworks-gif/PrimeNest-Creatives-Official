'use server';

import { createClient } from '@/utils/supabase/server';

export async function submitEnquiry(formData: {
  name: string;
  email: string;
  channelLink: string;
  project: string;
  needs: string[];
}) {
  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from('leads')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          channel_link: formData.channelLink,
          project: formData.project,
          needs: formData.needs,
        },
      ]);

    if (error) {
      console.error('Error inserting lead:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Server error submitting enquiry:', err);
    return { success: false, error: 'Internal server error' };
  }
}
