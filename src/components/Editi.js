import {React, useContext, useEffect} from "react";
import {ContextApi} from "../context/context"
import NavAdmin from "./NavAdmin";


const Editi = () => {
    const {post, loadPost, api} = useContext(ContextApi) 
  

    const excluiPost = async (id)=> {
      await api.delete(`/blog/${id}`)
      loadPost()
    }


  return (
    <div className="edit">
  <NavAdmin />
  <h3>Editar postagem</h3>
  {post.map((posts)=>{
      return(
        <ul key={posts.id}>
          <li className="list-adit"><h2>{posts.titulo}({posts.categoria})</h2>
          <button onClick={ () => {excluiPost(posts.id)}}>Excluir</button>
          </li>
        </ul>
      )
    })}
    </div>
  )
}

export default Editi