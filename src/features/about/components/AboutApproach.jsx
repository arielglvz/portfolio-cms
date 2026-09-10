const AboutApproach = ({ isOpen, onToggle }) => {
  return (
    <section onClick={() => onToggle("approach")}>
      <h2>How I Build</h2>

      <p>
        I approach development by breaking problems down, understanding the why
        behind the solution, and building step by step.
      </p>

      <p className={isOpen ? "block" : "hidden"}>
        I value clean, maintainable code and practical solutions over
        unnecessary complexity. When working with something unfamiliar, I take
        the time to understand it, experiment, and learn from feedback. I also
        believe good development is more than writing code — it's about
        understanding the user, communicating with the team, and continuously
        improving the product.
      </p>
    </section>
  )
}
export default AboutApproach
