import React from 'react'
import Pages from './Pages.css'
import Container from "../layout/Container"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"


export default function Perfil() {
    return(
        <>
        <Navbar/>
        <Container customClass='minHeight'>
            <h1>Perfil: </h1>
            <p className={Pages.p}>Essa página é dedicada ao perfil do estágiario e nela vai conter as soft skills, hard skills, se há experiência (e sua descrição) e seu contato. É por aqui que a empresa (caso se interesse pelo candidato) vai entrar em contato com o mesmo.O candidato pode editar as informações dessa página, adicionando uma foto de perfil e colocando uma descrição de si.</p>
        </Container>
        <Footer/>
        </>
    );
}