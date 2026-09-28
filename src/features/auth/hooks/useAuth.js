import { useContext } from "react"
import { AuthContext } from "@/features/auth/context/AuthContext"

export const useAuth = () => {
  return useContext(AuthContext)
}
