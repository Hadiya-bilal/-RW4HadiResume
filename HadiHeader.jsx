import React from 'react';
import './styles/HadiHeader.css';

const HadiHeader = ({ hadiName, hadiTitle }) => {
  return (
    <header className="hadi-header">
      <h1>{hadiName || "Your Name"}</h1>
      <h2>{hadiTitle || "Your Title"}</h2>
    </header>
  );
};

export default HadiHeader;