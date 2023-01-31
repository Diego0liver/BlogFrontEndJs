import React,{useContext, useEffect} from 'react'
import Imglogo from '../img/blog1.png'
import {Link} from "react-router-dom";
import {ContextApi} from "../context/context"
import Adm from '../img/admin.png'

const NavAdmin = () => {
  const {logout} = useContext(ContextApi)

  const sair=()=>{
    logout()
  }


  return (
    <div className='nav-admin'>
   <div className='admin-logo'>
      <Link to='/'><img src={Adm} alt='amd' className='ag'></img></Link> 
     </div>
      <img src={Imglogo} alt='logo' className='logo-admin'></img>
      <ul className='list-nav'>
      <Link to="/edit"><li>Editar Postagem</li></Link>
      <Link to="/add"><li>Nova postagem</li></Link>
      <Link to="/"><li><button onClick={sair}>Sair</button> </li></Link>
      </ul>
    </div>
  )
}

export default NavAdmin