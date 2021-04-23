
import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { 
//   BrowserRouter as Router, 
//   Switch, Link, NavLink,
//   Route } from 'react-router-dom';
//import { Link } from 'react-router-dom'
// import { SidebarData } from './SidebarData';
import './Navbar.css';
import Logo from './logo.png';

import { IconContext } from 'react-icons';


export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (

    <>
   
      <IconContext.Provider value={{ color: '#fff' }}>
      
        <div className='navbar'>
          <div className="sidebar">
            <a href="#home"><i class="fas fa-home"></i> Home</a>
            <a href="#staff"><i className="fa fa-fw fa-wrench"></i> Staff</a>
            <a href="#board"><i className="fa fa-fw fa-user"></i> Board</a>
            <a href="#partners"><i class="fas fa-users"></i> Partners</a>
            <a href="#advocacy"><i className="fa fa-fw fa-user"></i> Advocacy</a>
            <a href="#policy"><i className="fa fa-fw fa-wrench"></i> Policy</a>
            <a href="#trainings"><i className="fa fa-fw fa-user"></i> Trainings</a>
            <a href="#donate"><i className="fa fa-fw fa-wrench"></i> Donate</a>
            <a href="#contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
        </div>

          <div class="main">
            <img src={Logo} />
            <hr />
            <br />
            <h2>Sidebar with Icons</h2>
              <p>This side navigation is of full height (100%) and always shown.</p>
              <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
              <br />

              <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          </div> 
        </div>
      </IconContext.Provider>
   </>
  )
}


//      function Logo() {
//     return(
//       <div className="sidebar" id='logojff'>
//          {/* <a href="https://www.justice4families.org"> */}
//             <img src="https://www.justice4families.org/wp-content/themes/j4f/images/logo.png" alt="Justice For Families" title="Justice For Families" />
        
//        </div>
//     )
// }

          {/* {/* <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link> */}
                {/* </li>
              );
            })}
          </ul>
        </nav> */} 
       

// export default Navbar;
