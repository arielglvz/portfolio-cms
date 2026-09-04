import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col md:flex-row items-center md:justify-between text-center md:text-left px-6 py-20">
      <div>
        <h1 className="text-4xl font-bold">Ariel Galvez</h1>
        <p className="text-xl">Frontend Developer</p>
        <p className="text-sm">
          I build modern, responsive web applications with React.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/projects"
          className="bg-blue-500 text-white px-6 py-3 rounded"
        >
          View My Projects
        </Link>
        <Link to="/contact" className="border px-6 py-3 rounded">
          Contact Me
        </Link>
      </div>
    </section>
  )
}
export default Hero
