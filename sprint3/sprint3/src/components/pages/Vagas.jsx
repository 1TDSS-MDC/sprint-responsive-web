import React from 'react'
import Container from "../layout/Container"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"

export default function Vagas() {
    return(
        <>
        <Navbar/>
        <Container customClass='minHeight'>
            <h1>Vagas: </h1>
            <p>A página de vagas vai conter, além das vagas de interesse ao candidato(especificamente estágiarios) ela também terá as vagas que o candidato se inscreveu.</p>
            </Container>
        <Footer/>
        </>
    );
}