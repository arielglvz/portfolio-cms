import { useState } from "react"
import Skills from "./Skills"
import Card from "./Card"
import { usePosts } from "../hooks/usePosts"

const Navbar = ({ title = "Title", subtitle = "Subtitle" }) => {
  const [text, setText] = useState("")
  const { data, loading, error } = usePosts()

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
  ]

  const handleTitleChange = (newTitle) => {
    setText(newTitle)
  }

  const handleChangeText = (e) => setText(e.target.value)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  console.log(data)
  return (
    <div>
      <p>{title}</p>
      <p>{subtitle}</p>

      <p>Current Title: {text || "No title entered"}</p>

      <input
        type="text"
        value={text}
        placeholder="No title entered"
        onChange={handleChangeText}
      />

      <Card>
        <Skills skills={skills} onChangeTitle={handleTitleChange} />
      </Card>

      <Card>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default Navbar
