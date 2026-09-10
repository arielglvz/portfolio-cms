const AboutIntro = ({ isOpen, onToggle }) => {
  return (
    <section onClick={() => onToggle("intro")}>
      <h2>Who I am</h2>

      <p>
        I'm Ariel, a frontend developer who enjoys turning ideas into useful,
        modern web experiences.
      </p>

      <p className={isOpen ? "block" : "hidden"}>
        I was initially drawn to frontend development because I enjoy the
        creative side of building for the web — taking an idea and turning it
        into something people can see and interact with. Over time, that
        interest grew into something more: I became fascinated by the
        problem-solving behind the applications I build.
      </p>
    </section>
  )
}
export default AboutIntro
