import React from 'react';
import FindYourSpace from '../../images/FindYourSpace.png';
import Atelier from '../../images/Atelier.png';


const Projects = (() => {
  return (<div className="projects">
    <h2>My Projects.</h2>
    <div className="project-row">
      <img className="FindYourSpace-img" src={FindYourSpace} alt="FindYourSpace-img"/>
      <h3 onClick={() => window.open('https://github.com/boc-bulbasaur/FindYourSpace', '_blank')}>FindYourSpace</h3>
      <p>An Airbnb-styled app but for parking spaces. You can list, search for, and reserve a parking space.</p>
    </div>

    <div className="project-row">
      {/* TODO:  add live screenshot of the project */}
      <img className="Atelier-img" src={Atelier} alt="Atelier-img"/>
      <h3 onClick={() => window.open('https://github.com/rpp2204-fec-basilseed/Atelier', '_blank')}>Atelier</h3>
      <p>An E-commerce website which allows users to search for questions and answers, ask and answer questions related to a product.</p>
    </div>

  </div>);
});

export default Projects;