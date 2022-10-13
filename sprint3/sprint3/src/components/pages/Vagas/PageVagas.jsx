import React from 'react'
import Container from "../../layout/Container"
import Navbar from "../../layout/Navbar"
import Footer from "../../layout/Footer"
import ListaDeVagas from './VagasView'

export default function Vagas() {
    return(
        <>
        <Navbar/>
        <Container customClass='minHeight'>
            <h1>Vagas do seu interesse: </h1>
                <ListaDeVagas/>
            </Container>
        <Footer/>
        </>
    );
}