import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'


export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                     <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                      <Link to="/perfil">Perfil</Link>
                    </li>
                    <li className={styles.item}>
                       <Link to="/vagas">Vagas</Link> 
                    </li>
                </ul>
            </Container>
        </nav>
    )
}