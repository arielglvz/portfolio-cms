import { useState } from "react"

// Components
import AboutIntro from "../features/about/components/AboutIntro"
import AboutApproach from "../features/about/components/AboutApproach"
import AboutDirection from "../features/about/components/AboutDirection"

const About = () => {
  const [isOpen, setIsOpen] = useState({
    intro: true,
    approach: false,
    direction: false,
  })

  const onToggle = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <section className="mx-auto max-w-6xl space-y-6 px-6 py-20">
      <h1 className="text-4xl font-bold">About</h1>
      <AboutIntro isOpen={isOpen.intro} onToggle={onToggle} />
      <AboutApproach isOpen={isOpen.approach} onToggle={onToggle} />
      <AboutDirection isOpen={isOpen.direction} onToggle={onToggle} />
    </section>
  )
}
export default About
