import React from 'react';

const Score = (props) => {
  const { score, topScore, status, guessed } = props;

  let getClassName = () => {
    if (guessed) {
      return "text-white correct-click";
    }
    else {
      return "text-white incorrect-click";
    }
  }

  return ( 
    <nav className="navbar navbar-dark bg-dark sticky-top shadow-sm">
      <div className="score">
        <span className="text-white">
          Score: <span>{score}</span>
        </span>
        <span className="text-white">
          Top Score: <span>{topScore}</span>
        </span>
      </div>
      
      <div className="score">
        <span className={getClassName()}>{status}</span>
      </div>
    </nav>
   );
}
 
export default Score;