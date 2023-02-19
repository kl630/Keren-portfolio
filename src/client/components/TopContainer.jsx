import React from 'react';
import cloud from '../../images/cloud.png';
import mountain from '../../images/mountain.png';


const TopContainer = (() => {
  return (<div className="top-container">
      <img className="top-cloud" src={cloud} alt="cloud-img" />
      <h1>I'm Keren Liu</h1>
      <h2>a software <span>eng</span>ineer.</h2>
      <img className="bottom-cloud" src={cloud} alt="cloud-img" />
      <img src={mountain} alt="mountain-img" />
    </div>
  );
});

export default TopContainer;