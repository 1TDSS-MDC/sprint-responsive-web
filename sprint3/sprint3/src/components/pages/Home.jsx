import React from 'react'
import Pages from './Pages.css'
import Container from "../layout/Container"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"

export default function Home() {
    return(
        <>
        <Navbar/>
        <Container customClass='minHeight'>
            <h1>Home: </h1>
            <p className={Pages.p}>A página Home contém o fluxo de navegação do site como Sobre, Perfil e Vagas. No futuro a Home vai conter cards e a função de match com as empresas.</p>
        </Container>
        <Footer/>
        </>
    );
}