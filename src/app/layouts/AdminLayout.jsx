import { useAuth } from "@/features/auth/hooks/useAuth"
import { Link, Navigate, Outlet } from "react-router-dom"

const AdminLayout = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/projects">Projects</Link>
      </nav>
      <Outlet />
    </>
  )
}
export default AdminLayout
