import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Componentes/Footer/Footer'
import Navbar from './Componentes/Navbar/Navbar'
import Home from './Componentes/Home/Home'
import './App.css'
import ListaCategoria from './Componentes/Categorias/listacategoria/listacategoria'
import FormCategoria from './Componentes/Categorias/formcategoria/FormCategoria'
import DeletarCategoria from './Componentes/Categorias/deletarcategoria/DeletarCategoria'

// import edit (remove or complete this line if needed)

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/categorias/form" element={<FormCategoria />} />
              <Route path="/categorias/atualizar/:id" element={<FormCategoria />} />
              <Route path="/categorias/deletartema/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
