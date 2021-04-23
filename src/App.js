

import React from 'react';
import './App.css'
import Logo from './Logo';
import { 
BrowserRouter as Router, 
Switch 
 } from 'react-router-dom';
//  Link, NavLink,
// Route
  // import SidebarData from './components/SidebarData';
  
  // import Home from './components/Home';
  // import image from '../../image';
  // import Bio from './components/Bio';
  import Navbar from './components/Navbar';
  // import Staff from './components/Staff';
  // import Board from './components/Board';
  // import Partners from './components/Partners';
  // import Policy from './components/Policy';
  // import Trainings from './components/Trainings';
  // import Contact from './components/Contact';
  // import Donate from './components/Donate';
  // import WhoWeAre from './components/WhoWeAre';
  // import Gallery from './components/Gallery';

  // import Footer from './components/Footer';




  


//**Don't forget to add Logo top left aligned with menu */
function App() {
  return (
    <div>
         
      <Router>
        {/* <Navbar /> */}
        <Switch>
        
        {/* <ul className="main-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">Staff</NavLink></li>
            <li><NavLink to="/projects">Board</NavLink></li>
            <li><NavLink to="/contact">Partners</NavLink></li>
            <li><NavLink to="/">Policy</NavLink></li>
            <li><NavLink to="/about">Trainings</NavLink></li>
            <li><NavLink to="/projects">Contact</NavLink></li>
            <li><NavLink to="/contact">Donate</NavLink></li>
          </ul> */}
{/*           
          <Route path='/' exact component={Home} />
          <Route path='/staff' component={Staff} />
          <Route path='/board' component={Board} />
          <Route path='/partners' component={Partners} />
          <Route path='/policy' component={Policy} />
          <Route path='/trainings' component={Trainings} />
          <Route path='/contact' component={Contact} />
          <Route path='/donate' component={Donate} /> */}
        </Switch>
          {/* <Bio /> */}
        {/* <Circle /> */}
        
        <Navbar /> 
        {/* <Footer /> */}
      </Router>
    
     
     </div>
    // import React from 'react';
    // import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
    // import './App.css';
    
   
    
    // function App() {
    //   return (
    //     <div className="wrapper">
    //       <h1>Marine Mammals</h1>
    //       <BrowserRouter>
    //         <nav>
    //           <ul>
    //             <li><Link to="/manatee">Manatee</Link></li>
    //             <li><Link to="/narwhal">Narwhal</Link></li>
    //             <li><Link to="/whale">Whale</Link></li>
    //           </ul>
    //         </nav>
    //         <Switch>
    //           <Route path="/manatee">
    //             <Manatee />
    //           </Route>
    //           <Route path="/narwhal">
    //             <Narwhal />
    //           </Route>
    //           <Route path="/whale">
    //             <Whale />
    //           </Route>
    //         </Switch>
    //       </BrowserRouter>
    //     </div>
    //   );
    // }
    
    // export default App;


 

  
  );
}

export default App;
