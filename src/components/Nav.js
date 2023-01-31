import React from 'react'
import Blogs from '../img/blog.png'
import {Link} from "react-router-dom";
import Adm from '../img/admin.png'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='admin-logo'>
      <Link to='/edit'><img src={Adm} alt='amd' className='ag'></img></Link> 
     </div>
        <img src={Blogs} alt='blog' className='blog'></img>
        <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/filme"><li>Filmes</li></Link>
        <Link to="/serie"><li>Series</li></Link>
        </ul>
    </div>
  )
}

export default Nav