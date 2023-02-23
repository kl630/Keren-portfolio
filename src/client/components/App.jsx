import React from 'react';
import axios from 'axios';
import StickyMenu from './StickyMenu.jsx';
import TopContainer from './TopContainer.jsx';
import MiddleContainer from './MiddleContainer.jsx';
import BottomContainer from './BottomContainer.jsx';

const App = (() => {
  return (<div className="sticky">
    <StickyMenu />
    <TopContainer />
    <MiddleContainer />
    <BottomContainer />
  </div>);
});

export default App;