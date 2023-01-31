import {React, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {ContextApi} from "../context/context"
import Nav from './Nav'



const Serie = () => {
  const {post, loadPost} = useContext(ContextApi) 

  useEffect(()=>{
    loadPost()
  },[]);

  let filterSerie = post.filter(function(item) {
    return item.categoria === "Serie";
});
  


  return (
    <div className='Home'>
        <Nav />
        <h1>Series</h1>
        <div className="cont-card">
        {filterSerie.map((posts)=>{
      return(
        <ul key={posts.id} className="card">
          <img   className="avatar"  src={`http://localhost:1000/${posts.imagem}`} alt='avatar'></img>
          <li><h2>{posts.titulo}</h2></li>
          <li><Link to={{ pathname: `/noticia/${posts.id}` }} className='links'>Ler mais</Link></li>
        </ul>
      )
    })}</div>
    </div>
  )
}

export default Serie