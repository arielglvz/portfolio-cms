import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

// Layouts
import MainLayout from "./app/layouts/MainLayout.jsx"

// Pages
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Experience from "./pages/Experience.jsx"
import Blog from "./pages/Blog.jsx"

import Dashboard from "@/pages/Dashboard"
import Login from "@/pages/Login"
import { AuthProvider } from "@/features/auth/context/AuthProvider"
import AdminLayout from "@/app/layouts/AdminLayout"

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]

const router = createBrowserRouter(routes)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
