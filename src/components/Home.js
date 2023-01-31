import {React, useEffect, useContext} from "react";
import {ContextApi} from "../context/context"
import ImageGallery from 'react-image-gallery';
import {Link} from "react-router-dom";
import Nav from "./Nav";
import Img1 from "../img/aaa.png"
import Img2 from "../img/bbb.png"
import Img3 from "../img/ccc.png"

const images = [
  {
    original: Img3,
  },
  {
    original: Img2,
  },
  {
    original:Img1,
  },
];

function Home() {
  const {post, loadPost} = useContext(ContextApi) 
  
      useEffect(()=>{
        loadPost()
      },[]);


  return (
    <div className="Home">
    <Nav />
    <ImageGallery items={images} autoPlay={true} showFullscreenButton={false} />
    <h1>Ultimas Noticias</h1>
    <hr />
    <div className="cont-card">
    {post.map((posts)=>{
      return(
        <ul key={posts.id} className="card">
          <li className="categoria"><h3>{posts.categoria}</h3></li>
          <img className="avatar" src={`http://localhost:1000/${posts.imagem}`} alt='avatar'></img>
          <li><h2>{posts.titulo}</h2></li>
          <li><Link to={{ pathname: `/noticia/${posts.id}` }}><button>Ler mais</button></Link> </li>
        </ul>
      )
    })}</div>
    </div>
  );
}

export default Home;