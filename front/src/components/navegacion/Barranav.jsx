import React from "react";
import '../../css/barranav.css'
import Retro from '../../icon/Vista/retroceder.png';
import Agregar from '../../icon/Vista/agregar.png';
import { useNavigate } from "react-router-dom";

function Barranav(props) {
  const Navigate = useNavigate()
  const Add = () => {
    Navigate('/medicinas/agregar')
  }
  const home = ()=>{
    Navigate('/home')
  }
  
  return (
    // este es el que deben elegir
    <div className="contenedor-barra">
      <div className="retro">
        <img
          className='atras'
          src={Retro}
          alt='' 
          onClick={home} />
      </div>
      <div className='titulo-cont'> 
        <p id="titulo">{props.titulocont}</p>
      </div>
      <div className="agregar">
        <img
          className='annadir'
          src={Agregar}
          alt='' 
          onClick={Add}/>
      </div>
    </div>
  );
}

export default Barranav;