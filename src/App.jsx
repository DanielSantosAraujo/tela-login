import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import EsqueceuSenha from "./pages/EsqueceSenha"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/esqueceusenha" element={<EsqueceuSenha/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
