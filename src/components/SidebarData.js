
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Staff',
    path: '/staff',
    icon: <FaIcons.FaUserCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Board',
    path: '/board',
    icon: <FaIcons.FaNetworkWired />,
    cName: 'nav-text'
  },
  {
    title: 'Partners',
    path: '/partners',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Advocacy',
    path: '/advocacy',
    icon: <FaIcons.FaAdn/>,
    cName: 'nav-text'

  },
  {
     title: 'Policy',
     path: '/policy',
     icon: <RiIcons.RiGovernmentFill />,
     cName: 'nav-text' 
  },
  {
    title: 'Trainings',
    path: '/trainings',
    icon: <FaIcons.FaLayerGroup />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <RiIcons.RiContactsFill />,
    cName: 'nav-text'
  },
  {
    title: 'Donate',
    path: '/donate',
    icon: <FaIcons.FaDonate />,
    cName: 'nav-text'
  },
  
];

export default SidebarData;