import React, {useContext} from "react";
import { Routes,Route } from "react-router-dom";
import Add from "./components/Add";
import Editi from "./components/Editi";
import Filme from "./components/Filme";
import Home from "./components/Home"
import Login from "./components/Login";
import Noticia from "./components/Noticia";
import Serie from "./components/Serie";
import { ContextApi } from "./context/context";


function App() {
  const {autentificado} = useContext(ContextApi) 

  const Privit = ({children})=>{
  if(!autentificado){
      return <Login />
    }
    return children
  }

  return (<div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/noticia/:id' element={<Noticia />} />
      <Route path='/filme' element={<Filme />} />
      <Route path='/serie' element={<Serie />} />
      <Route path='/login' element={<Login />} />
      <Route path='/add' element={<Privit><Add /></Privit>} />
      <Route path='/edit' element={<Privit><Editi /></Privit>} />
    </Routes>
</div>);
}

export default App;