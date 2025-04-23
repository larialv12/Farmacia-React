import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Componentes/Footer/Footer'
import Navbar from './Componentes/Navbar/Navbar'
import Home from './Componentes/Home/Home'
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
