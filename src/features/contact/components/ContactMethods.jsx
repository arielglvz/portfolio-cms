const ContactMethods = () => {
  const contactMethods = [
    {
      label: "Email",
      value: "arielglvz@gmail.com",
      href: "mailto:arielglvz@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/arielglvz",
      href: "https://github.com/arielglvz",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/arielglvz",
      href: "https://www.linkedin.com/in/arielglvz",
    },
  ]

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {contactMethods.map((method) => (
          <li key={method.label} className="max-w-65 border px-6 py-4">
            <p>{method.label}</p>
            {/* target="_blank"  */}
            <a href={method.href} className="hover:font-bold">
              {method.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactMethods
