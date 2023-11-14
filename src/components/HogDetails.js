import React, { useState } from 'react';

const HogDetails = ({ name, specialty, weight, greased, highestMedal }) => {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="hog-tile" onClick={toggleDetails}>
      <h2>{name}</h2>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div>
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight}</p>
          <p>Greased: {greased? 'Yes' : 'No'}</p>
          <p>Highest Medal: {highestMedal}</p>
        </div>
      )}
    </div>
  );
}

export default HogDetails;