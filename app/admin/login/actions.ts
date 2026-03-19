'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const { email, password } = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  let errorMsg = ''
  let success = false
  
  try {
    const supabase = await createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      errorMsg = error.message
    } else {
      success = true
    }
  } catch (err: any) {
    console.error('Login Server Action Crash:', err)
    errorMsg = err?.message || 'Unknown Server Action Error'
  }

  if (errorMsg) {
    redirect(`/admin/login?error=${encodeURIComponent(errorMsg)}`)
  }

  if (success) {
    revalidatePath('/', 'layout')
    redirect('/admin')
  }
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}
