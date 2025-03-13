import React from 'react';
import HadiHeader from './Components/HadiHeader';
import HadiExperience from './Components/HadiExperience';
import HadiEducation from './Components/HadiEducation';
import HadiSkills from './Components/HadiSkills';
import HadiLanguages from './Components/HadiLanguages';
import HadiReferences from './Components/HadiReferences';
import HadiFooter from './Components/HadiFooter';
import './ResumeTemplate.css';

const ResumeTemplate = ({
  hadiName,
  hadiTitle,
  hadiProfile,
  hadiExperience,
  hadiEducation,
  hadiSkills,
  hadiLanguages,
  hadiReferences,
}) => {
  return (
    <div className="resume">
      <HadiHeader hadiName={hadiName} hadiTitle={hadiTitle} />
      <section className="profile">
        <h2>Profile</h2>
        <p>{hadiProfile || "Add your profile summary here."}</p>
      </section>
      <HadiExperience hadiExperience={hadiExperience} />
      <HadiEducation hadiEducation={hadiEducation} />
      <HadiSkills hadiSkills={hadiSkills} />
      <HadiLanguages hadiLanguages={hadiLanguages} />
      <HadiReferences hadiReferences={hadiReferences} />
      <HadiFooter />
    </div>
  );
};

export default ResumeTemplate;