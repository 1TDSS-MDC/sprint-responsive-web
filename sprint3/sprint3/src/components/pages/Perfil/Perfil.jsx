import React from 'react'
import Container from "../../layout/Container"
import Navbar from "../../layout/Navbar"
import Footer from "../../layout/Footer"
import PerfilImg from "../../img/Perfil.png"
import PerfilVagas from "./PerfilVagas"
import { DivPerfil, H1Perfil, ImgPerfil, Perfilh2, H1Vagas } from '../../Style/Styled'

export default function Perfil() {
    return(
        <>
        <Navbar/>
        <Container customClass='minHeight'>
            <DivPerfil>
                <ImgPerfil src={PerfilImg} alt="perfil"/>
                <H1Perfil> Candidato </H1Perfil>
                <Perfilh2> Nome: João Oliveira </Perfilh2>
                <Perfilh2> Idade: 18 anos </Perfilh2>
                <Perfilh2> Email: joaooliveira@gmail.com </Perfilh2>
                <Perfilh2> Biografía: Olá meu nome é joão, tenho 18 anos e estou em busca de um estágio na área de TI </Perfilh2>

            </DivPerfil>
            <div>
                <H1Vagas>Vagas selecionadas:</H1Vagas>
                <PerfilVagas/>
            </div>
        </Container>
        <Footer/>
        </>
    );
}