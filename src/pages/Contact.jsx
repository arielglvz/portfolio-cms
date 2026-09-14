import ContactIntro from "../features/contact/components/ContactIntro"
import ContactMethods from "../features/contact/components/ContactMethods"

const Contact = () => {
  return (
    <section className="mx-auto max-w-6xl space-y-6 px-6 py-20">
      <h1 className="text-4xl font-bold">Contact</h1>

      <ContactIntro />
      <ContactMethods />
    </section>
  )
}

export default Contact
