import React from 'react';
import Score from './Score'; // Import the Score component

const Learner = ({ name, bio, scores }) => {
  return (
    <div className="learner">
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>Scores:</h3>
      <ul>
        {/* Render a Score component for each score object in the learner's scores property */}
        {scores.map((score, index) => (
          <Score key={index} date={score.date} score={score.score} />
        ))}
      </ul>
    </div>
  );
};

export default Learner; 