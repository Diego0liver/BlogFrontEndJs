import { createContext, useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export const ContextApi = createContext();

export function ContextApiProvider({children}){
      let history = useNavigate()
      const [post, setPost] = useState([])
      const [user, setUser] = useState(null)

      useEffect(()=>{
        const token = localStorage.getItem("token")
        loadPost()
        setUser(token)
   },[])

      const api = axios.create({
        baseURL: 'http://localhost:1000',
      });
  
      const loadPost = async () => {
        const result = await api.get('/blog/')
        setPost(result.data)
      }

      const logarAdmin = async (usuario, senha)=>{
        return api.post("/login", {usuario, senha})
    } 

    const logi = async (usuario, senha)=>{
      const res = await logarAdmin(usuario, senha)
     const localUser = res.data
     const token = res.data.token
     api.defaults.headers.Authorization = `Bearer ${token}`
        if(res.data.token !== undefined){
         localStorage.setItem("token", token)
         console.log(token)
         setUser(localUser)
        console.log('ok')
        history('/edit')}
         else{
          alert("Usuario nao autorizado")
         }
 }

 const logout=()=>{
  setUser(null)
  localStorage.removeItem("token")
  api.defaults.headers.Authorization = null
}

    return(
        <ContextApi.Provider value={{post, loadPost, api, logi, autentificado:!!user, user, logout}}>
              {children}
        </ContextApi.Provider>)
}