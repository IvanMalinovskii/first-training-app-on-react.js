import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './header-components/Header.js'; 
import Main from './main-components/Main.js';
import NotesPage from './main-components/notes-page/NotesPage.js';

let links = [
  {
      id: 1,
      to: '',
      text: 'Home',
      component: <NotesPage />
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
