import {React,  useState} from "react";
import axios from "axios";
import NavAdmin from "./NavAdmin";


const baseURL = "http://localhost:1000/blog/"

const Add = () => {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDesc] = useState('')
    const [imagem, setImg] = useState('')
    const [categoria, setCatego] = useState('')

    const [error, setError] = useState("");
   
    const limiti = 120
    const limitText = 4000
    const changeTitulo = (event) => {
      if (event.target.value.length <= limiti) {
        setTitulo(event.target.value);
      }
    };

    const changeDesc = (event)=>{
      if(event.target.value.length <= limitText){
        setDesc(event.target.value)
      }
    }

    const changeFile = (event) => {
      const targetFile = event.target.files[0];
      const tipoImg = ["image/jpeg", "image/png"];
      if (!targetFile || tipoImg.indexOf(targetFile.type) === -1) {
        setImg(null);
        setError("Somente imagens JPEG e PNG");
      } else {
        setImg(targetFile);
        setError("");
      }
    };

    const cria = async () =>{
      if(titulo && descricao && imagem && categoria){
      const forData = new FormData()
      forData.append('titulo', titulo)
      forData.append('imagem', imagem)
      forData.append('descricao', descricao)
      forData.append('categoria', categoria)
        await axios.post(baseURL, forData, {
          headers:{
            'Content-Type' : `multipar/form-data`
          }
        }).then(alert('Post adicionado com sucesso!'))
      }else{
        alert("preencha todos os campos")
      }
    }


  return (
    <div className="add">
      <NavAdmin />
        <form className="form-add">
          <h3>Nova postagem</h3>
            <label className="label">Titulo:</label> 
            <input className="input" type='text' value={titulo} maxLength={limiti} onChange={changeTitulo}>
              </input><br />
            <label className="label">Imagem:</label>
            <input className="input" type='file' name="foto" onChange={changeFile}></input><br />
            {error && <div>{error}</div>}
            <label className="label">Categoria (filme/serie):</label>
            <select className="input" type='text' name="categoria" value={categoria} onChange={(e)=> setCatego (e.target.value)}><br />
             <option value=""></option>
             <option value="Filme">Filme</option>
             <option value="Serie">Serie</option>
             </select><br />
             <label className="label">Texto do blog:</label>
             <textarea  className="input" value={descricao} onChange={changeDesc}></textarea><br />
            <button onClick={cria}>Salvar</button>
        </form>
    </div>
  )
}

export default Add