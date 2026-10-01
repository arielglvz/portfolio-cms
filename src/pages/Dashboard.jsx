import { logout } from "@/features/auth/services/authService"

const Dashboard = () => {
  const handleLogout = async () => {
    await logout()
  }

  return (
    <section className="mx-auto max-w-6xl space-y-6 px-6 py-20">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </section>
  )
}
export default Dashboard
