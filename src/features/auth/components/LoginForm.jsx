import { useState } from "react"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  // const handleChange = (e) => {
  //   setFormData((prev) => ({ ...prev, }))
  // }

  const handleLogin = (e) => {
    e.preventDefault()

    const { email, password } = formData

    console.log("test value: ", email, password)
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  )
}
export default LoginForm
