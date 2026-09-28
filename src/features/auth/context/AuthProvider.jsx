import { useEffect, useState } from "react"
import { AuthContext } from "@/features/auth/context/AuthContext"
import { supabase } from "@/lib/supabase"

// AuthProvider - Component that will provide auth data to the app (a React component)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null)
    })

    const getSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (error) throw error

        setUser(data?.session?.user ?? null)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getSession()
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// ? THE KEY CONCEPT
// * onAuthStateChange() - registers the listener and gives you a subscription.
// * The callback -  updates user when an auth event occurs.
// * return () => ... - in useEffect tells React what to clean up when the effect is removed.
