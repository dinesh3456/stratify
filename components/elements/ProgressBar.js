import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="bar progress-line" style={{ width: `${percentage}%` }}>
      <div className="skill-percentage">
        <div className="count-box">
          <span className="count-text">{percentage}</span>%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;


