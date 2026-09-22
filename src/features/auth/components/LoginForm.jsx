import { login } from "@/features/auth/services/authService"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // const handleChange = (e) => {
  //   setFormData((prev) => ({ ...prev, }))
  // }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { email, password } = formData

      await login(email, password)
      navigate("/dashboard")
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3">
          <p className="text-center">{error}</p>
        </div>
      )}
    </form>
  )
}
export default LoginForm
