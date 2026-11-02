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

export const updateProject = async (projectId, projectData) => {
  const { data, error } = await supabase
    .from("projects") // Selects the table
    .update(projectData) // Specifies the new values
    .eq("id", projectId) // Targets the matching row eq(column, value) //! Important: The .eq("id", projectId) condition is essential. It prevents the update from targeting every row in the table.
    .select() //	Requests the updated record
    .single() // 	Returns one record instead of an array

  if (error) {
    throw error
  }

  return data
}
