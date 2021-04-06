

import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Logo from './Logo.js';
import { 
  BrowserRouter as Router, 
  Switch, Link,
  Route } from 'react-router-dom';
  import SidebarData from './components/SidebarData';
  
  import Home from './components/Home';
  // import image from '../../image';
  import Staff from './components/Staff';
  import Board from './components/Board';
  import Partners from './components/Partners';
  import Policy from './components/Policy';
  import Trainings from './components/Trainings';
  import Contact from './components/Contact';
  import Donate from './components/Donate';
  // import WhoWeAre from './components/WhoWeAre';
  import Circle from './components/Circle';
  // import Square from './components/Square';
  import Footer from './components/Footer';




  


//**Don't forget to add Logo top left aligned with menu */
function App() {
  return (
    <div>
      <Logo />    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/staff' component={Staff} />
          <Route path='/board' component={Board} />
          <Route path='/partners' component={Partners} />
          <Route path='/policy' component={Policy} />
          <Route path='/trainings' component={Trainings} />
          <Route path='/contact' component={Contact} />
          <Route path='/donate' component={Donate} />
        </Switch>
      
        <Circle />
        <Contact />
        <Footer />
      </Router>
    
     
    </div>
    




  
  );
}

export default App;
