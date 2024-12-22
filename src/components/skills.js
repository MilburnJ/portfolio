const Skills = () => {
  const skills = ["Python", "TensorFlow", "React", "Docker", "Linux"];

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800">Skills</h2>
      <ul className="mt-6 flex flex-wrap justify-center space-x-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
