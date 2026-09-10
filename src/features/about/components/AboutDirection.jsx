const AboutDirection = ({ isOpen, onToggle }) => {
  return (
    <section onClick={() => onToggle("direction")}>
      <h2>Where I'm Going</h2>

      <p>
        I'm looking to grow as a frontend developer while contributing to
        products that solve real problems.
      </p>

      <p className={isOpen ? "block" : "hidden"}>
        I'm looking for opportunities where I can continue strengthening my
        frontend skills, work with experienced developers, and contribute to
        meaningful products. I'm especially interested in teams that value
        collaboration, clean development practices, and continuous learning. My
        goal is to keep growing technically while becoming a developer who can
        take greater ownership of the features and products I build.
      </p>
    </section>
  )
}
export default AboutDirection
GIT 