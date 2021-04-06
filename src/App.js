

import React from 'react';
import './App.css'
import Navbar from './component/Navbar';
import Logo from './Logo.js';
import { 
  BrowserRouter as Router, 
  Switch, Link,
  Route } from 'react-router-dom';
  import SidebarData from './component/SidebarData';
  
  import Home from './component/Home';
  // import image from '../../image';
  import Staff from './component/Staff';
  import Board from './component/Board';
  import Partners from './component/Partners';
  import Policy from './component/Policy';
  import Trainings from './component/Trainings';
  import Contact from './component/Contact';
  import Donate from './component/Donate';
  // import WhoWeAre from './components/WhoWeAre';
  import Circle from './component/Circle';
  // import Square from './components/Square';
  import Footer from './component/Footer';




  


//**Don't forget to add Logo top left aligned with menu */
function App() {
  return (
    <div>
      <Logo />    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
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
