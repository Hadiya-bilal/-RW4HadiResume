import React from 'react';
import './styles/HadiReferences.css';

const HadiReferences = ({ hadiReferences }) => {
  return (
    <section className="hadi-references">
      <h2>References</h2>
      <ul>
        {hadiReferences.map((ref, index) => (
          <li key={index}>
            <strong>{ref.name}</strong> - {ref.role}
            <p>Phone: {ref.phone}</p>
            <p>Email: {ref.email}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HadiReferences;