import { Outlet } from "react-router-dom"

// Components
import Navbar from "@/components/Navbar"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
