import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './componant/NAV/nav';
import Portfolio from './componant/portfolio';
import Contact from './componant/CONTACT/contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Portfolio />
    <Contact />
  </React.StrictMode>
);


