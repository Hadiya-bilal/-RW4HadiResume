import React, { useState } from 'react';
import './styles/HadiForm.css';

const HadiForm = ({ onUpdateResume }) => {
  const [hadiName, setHadiName] = useState('');
  const [hadiTitle, setHadiTitle] = useState('');
  const [hadiProfile, setHadiProfile] = useState('');
  const [hadiExperience, setHadiExperience] = useState([]);
  const [hadiEducation, setHadiEducation] = useState([]);
  const [hadiSkills, setHadiSkills] = useState([]);
  const [hadiLanguages, setHadiLanguages] = useState([]);
  const [hadiReferences, setHadiReferences] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateResume({
      hadiName,
      hadiTitle,
      hadiProfile,
      hadiExperience,
      hadiEducation,
      hadiSkills,
      hadiLanguages,
      hadiReferences,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="hadi-form">
      <h2>Edit Your Resume</h2>
      <label>
        Name:
        <input
          type="text"
          value={hadiName}
          onChange={(e) => setHadiName(e.target.value)}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={hadiTitle}
          onChange={(e) => setHadiTitle(e.target.value)}
        />
      </label>
      <label>
        Profile:
        <textarea
          value={hadiProfile}
          onChange={(e) => setHadiProfile(e.target.value)}
        />
      </label>
      <button type="submit">Update Resume</button>
    </form>
  );
};

export default HadiForm;