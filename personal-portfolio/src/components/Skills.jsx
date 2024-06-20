// Skills.js
import React from 'react';
import './Skills.css'; 

function Skills() {
  // Updated skills data
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Figma', 'DSA', 'C++', 'Python', 'OS', 'Git', 'GitHub'];

  return (
    <section className="skills-container">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
