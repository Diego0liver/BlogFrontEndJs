import React, { useState, useContext} from 'react'
import Imglogo from '../img/blog1.png'
import {ContextApi} from "../context/context"


const Login = () => {
  const {logi} = useContext(ContextApi)
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const logins=(e)=>{
   e.preventDefault()
   logi(usuario, senha)
  }

  return (
    <div className='Login'>
      
      <form className='form'>
      <img src={Imglogo} alt='logo' className='logo-admin'></img>
        <label>Usuario</label>
        <input type='text'  value={usuario} onChange={(e)=> setUsuario (e.target.value)}></input>
        <label>Password</label>
        <input type='password'  value={senha} onChange={(e)=> setSenha (e.target.value)}></input>
        <button className='btn-login' onClick={logins}>Logar</button>
      </form>
    </div>
  )
}

export default Login