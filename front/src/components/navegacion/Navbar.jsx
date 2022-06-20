import React from "react";
import Carrito from '../../icon/Home/carrito.png';
import '../../css/navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const logOut  = () => {
    navigate('/')
  }
  const home = () =>{
    navigate('/home')
  }
  const medicinas = () =>{
    navigate('/medicinas')
  }
  
    return(
      <div className='contenedor-nav'>
      <nav className='menu'>
        <div className='nav-wrapper submenu'>
          <a onClick={home} className='waves-effect waves-light btnico'>
            <img 
            className='logo'
            src={Carrito} 
            alt='logo cybermed' />
          </a>
          <ul id='nav-mobile' className='right listado'>
            <li><a className='black-text text-darken-4 btnmenu' onClick={home}>INICIO</a></li>
            <li><a className='black-text text-darken-4 btnmenu' onClick={medicinas}>MEDICINAS</a></li>
            <li><a className='black-text text-darken-4 btnmenu' onClick={logOut}>CERRAR SESION</a></li>
          </ul>
        </div>
      </nav>
 </div>
    );
}

export default Navbar;
