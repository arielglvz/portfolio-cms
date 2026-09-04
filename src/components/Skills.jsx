const Skills = ({ skills, onChangeTitle }) => {
  return (
    <div className="skillst">
      <p>Skills</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>
            {skill.name} - {skill.category}
          </li>
        ))}
      </ul>

      <button onClick={() => onChangeTitle("React Developer")}>
        Set title to React Developer
      </button>
    </div>
  )
}

export default Skills
