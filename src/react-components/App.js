import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './header-components/Header.js'; 
import Main from './main-components/Main.js';

let links = [
  {
      id: 1,
      to: '',
      text: 'Home',
      component: <div>First</div>
  },
  {
      id: 2,
      to: 'about',
      text: 'About',
      component: <div>Second</div>
  }
];

function App() {
  return (
    <Router>
      <Header links={links} />
      <Main paths={links} />
    </Router>
  );
}

export default App;
