import React from 'react';
import Profile from './Profile.jsx';
import Projects from './Projects.jsx';
import ContactMe from './ContactMe.jsx';

const MiddleContainer = (() => {
  return (<div className="middle-container">
    <Profile />
    <hr />
    <Projects />
    <hr />
    <ContactMe />
  </div>);
});

export default MiddleContainer;