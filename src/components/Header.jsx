import React from 'react';

const Header = (props) => {
  const { score, topScore } = props;
  return (
    <>
    <div className="header" style={{ backgroundImage: `url("img/background.jpg")` }}>
      <h3>Game Of Thrones</h3>    
      <h4>Memory Game</h4>    
      <h5>Click on an image to earn points</h5>
      <h5>but you can't click on the same image more than once!</h5>
    </div>

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
          <span className="text-white">Status</span>
        </div>
    </nav>
    </>
  );
}


 
export default Header;