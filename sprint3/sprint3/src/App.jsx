import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./components/pages/Home"
import Sobre from "./components/pages/Sobre"
import Perfil from "./components/pages/Perfil"
import Vagas from "./components/pages/Vagas"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"



export default function App(){

    return(
        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/sobre" element={<Sobre />} />
                </Routes>
                <Routes>
                    <Route path="/perfil" element={<Perfil />} />
                </Routes>
                <Routes>
                    <Route path="/vagas" element={<Vagas />} />
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/register" element={<Register />} />
                </Routes>
        </Router>
    )
}
