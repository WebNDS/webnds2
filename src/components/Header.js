import React from 'react';
import logo from '../Images/logo1.jpeg'
import {logostyle} from './styles/styles.js'

export default function Header() {  
  return (
    <div className='navbar_body'>
      <div className='row'>
        <div className='col'>
       <a  href="/"> <img className="navbar_logo" src={logo} style={logostyle} alt="Not Found"/></a>  
       </div>
       <div className='col'>
       <p className='navbar_font'> W E B N D S </p>
       <p className='navbar_font_small'>Website building and software service</p> 
       </div>
       <div className='col'>
       <p className='navbar_font_contact'> Contact: +91 9967 153 150 </p>
       <p className='navbar_font_contact'> Email: advani.dhiraj91@gmail.com </p>
       </div>
       </div>
    </div>
     
  )
}
