import { supabase } from "@/lib/supabase"

export const getProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true })

  if (error) {
    throw error
  }

  return data
}

export const createProject = async (projectData) => {
  const { data, error } = await supabase
    .from("projects")
    .insert(projectData)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}
