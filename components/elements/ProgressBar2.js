import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const ProgressBar2 = ({ title, count }) => {
  const barAnimation = useSpring({
    from: { width: '0%' },
    to: { width: `${count}%` },
    config: { duration: 1000 }, // Animation duration in milliseconds
  });

  return (
    <div className="progress-area mt-20">
      <div className="progress__title mb-1">
        <h6>{title}</h6>
        <span>
          <span className="progress-count">{count}</span>%
        </span>
      </div>
      <div className="progress">
        <animated.div
          style={barAnimation}
          className="progress-bar"
          role="progressbar"
          aria-valuenow={count}
          aria-valuemin="0"
          aria-valuemax="100"
        ></animated.div>
      </div>
    </div>
  );
};

export default ProgressBar2;


