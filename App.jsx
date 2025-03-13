import React, { useState } from 'react';
import HadiForm from './Components/HadiForm';
import ResumeTemplate from './ResumeTemplate';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState({
    hadiName: '',
    hadiTitle: '',
    hadiProfile: '',
    hadiExperience: [],
    hadiEducation: [],
    hadiSkills: [],
    hadiLanguages: [],
    hadiReferences: [],
  });

  return (
    <div className="App">
      <h1>Hadi's Resume Builder</h1>
      <div className="container">
        <HadiForm onUpdateResume={setResumeData} />
        <ResumeTemplate {...resumeData} />
      </div>
    </div>
  );
}

export default App;