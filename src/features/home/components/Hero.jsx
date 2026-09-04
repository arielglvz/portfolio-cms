import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Ariel Galvez</h1>
        <p>Frontend Developer</p>
        <p>I build modern, responsive web applications with React.</p>
      </div>

      <div>
        <Link to="/projects">View My Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </section>
  )
}
export default Hero
