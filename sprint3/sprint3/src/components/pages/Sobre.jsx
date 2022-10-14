import React from 'react'
import Pages from './Pages.css'
import Container from "../layout/Container"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"
import Logo from "../img/logo.png"
import {Img} from "../Style/Styled"

export default function Sobre() {
    return(
        <>
        <Navbar/>
        <Container customClass='minHeight'>
            <h1 className={Pages.h}>Sobre:</h1>
            <p className={Pages.p}>Consideramos que a avaliação do candidato para um vaga de estágio, para do princípio relacionado as qualidades pessoais de gestão de problemas, relações interpessoais, espirito de trabalho em equipe, inteligência emocional e outras Softskills, já que não será cobrado experiencia na área por se tratar de um trabalho de adaptação. Diante disso nosso grupo Softz desenvolveu uma plataforma cujo o objetivo é auxiliar os postulantes na aprimoração e exposição de seus atributos individuais visando a descoberta e implementação de novos talentos no mercado corporativo.</p>
            <Img src={Logo} alt="logo"/>    
        </Container>
        <Footer/>
        </>
    );
}