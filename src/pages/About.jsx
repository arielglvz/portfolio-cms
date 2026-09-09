// Components
import AboutIntro from "../features/about/components/AboutIntro"
import AboutApproach from "../features/about/components/AboutApproach"
import AboutDirection from "../features/about/components/AboutDirection"

const About = () => {
  return (
    <section className="mx-auto max-w-6xl space-y-6 px-6 py-20">
      <h1 className="text-4xl font-bold">About</h1>
      <AboutIntro />
      <AboutApproach />
      <AboutDirection />
    </section>
  )
}
export default About
