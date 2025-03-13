import React from 'react';
import './styles/HadiSkills.css';

const HadiSkills = ({ hadiSkills }) => {
  return (
    <section className="hadi-skills">
      <h2>Skills</h2>
      <ul>
        {hadiSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default HadiSkills;