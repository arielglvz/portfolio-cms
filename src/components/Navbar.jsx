import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ]

  return (
    <nav className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <div>
          <Link to="/">Ariel Galvez</Link>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-4">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
