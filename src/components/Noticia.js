import  {React, useEffect, useState, useContext} from 'react'
import {ContextApi} from "../context/context"
import {useParams} from "react-router-dom";
import Nav from './Nav'

const Noticia = () => {
  const {api} = useContext(ContextApi) 
    const [noticia, setNoticia] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
      if ( id ) {
          api.get(`/blog/${id}`)
              .then(res => {
                setNoticia(res.data) 
              })
              .catch(err => {
                  console.log(err)
              })}
  }, [ id, api ]);



  return (
    <div className='noticia'>
    <Nav /><h1>{noticia.titulo}</h1>
        <hr />
        <img src={`http://localhost:1000/${noticia.imagem}`} alt='serie' className='img-notcia' ></img>
        <p className='datas'>Data da postagem: {noticia.datas}</p>
        <p className='txt'>{noticia.descricao}</p>
    </div>
  )
}

export default Noticia