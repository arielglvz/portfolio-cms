import { supabase } from "@/lib/supabase"

export const login = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (response.error) {
    throw response.error
  }

  return response
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) throw error
}
