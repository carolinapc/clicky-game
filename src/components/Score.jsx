import React from 'react';

const Score = (props) => {
  const { score, topScore, status } = props;
  return ( 
    <nav className="navbar navbar-dark bg-dark sticky-top shadow-sm">
      <div className="score">
        <span className="text-white">
          Score: {score}
        </span>
        <span className="text-white">
          Top Score: {topScore}
        </span>
      </div>
      
      <div className="score">
        <span className="text-white">{status}</span>
      </div>
    </nav>
   );
}
 
export default Score;