import React from 'react';
import './App.css'
import Navbar from './components/Navbar.js';
import Logo from './Logo.js';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from 'react-router-dom';
  import SidebarData from './components/SidebarData';
  import BoardPics from './Pictures/BoardPics';



//**Don't forget to add Logo top left aligned with menu */
function App() {
  return (
    <>
      <Logo />    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    
     
    </>
    
    
  
  );
}

export default App;
