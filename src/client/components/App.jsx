import React from 'react';
import axios from 'axios';
import TopContainer from './TopContainer.jsx';
import MiddleContainer from './MiddleContainer.jsx';
import BottomContainer from './BottomContainer.jsx';

const App = (() => {
  return (<div>
    <TopContainer />
    <MiddleContainer />
    <BottomContainer />
  </div>);
});

export default App;