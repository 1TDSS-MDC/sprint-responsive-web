import React from 'react'
import Navbar from "../../layout/Navbar"
import Footer from "../../layout/Footer"
import ListaDeVagas from "../Home/ListaVagas"

export default function Home() {
    return(
        <>
        <Navbar/>
            <ListaDeVagas/>  
        <Footer/>
        </>
    );
}