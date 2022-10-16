import styled from "styled-components";

export const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    background-color: rgb(42, 162, 218);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
export const DivTarefa = styled.div`
    background-color : #6a7dfe;
    border:  2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 430px;
    margin: 10px;
    position: relative;
    h2,p{padding-bottom: 10px;}
    button{position:absolute;top:10px; right:10px}`

export const DivForm = styled.div`
    width:35%;
    height:15%;
    padding:25px;
    background-color:#6a7dfe;
    form{width:80%; margin:auto; float:left;}
    form input, form textarea{padding:5px; width:98%; margin:3px; border: 1px solid rgba(0,0,0,.1);}
    form textarea{height:110px;}
    form button{padding:10px; background: #222; color:#fff; width:40%;}
    h3{margin-left: 4px; padding:2px}`

export const Img = styled.img`
    width: 38%;
    height: 52%;
    background-color: transparent;
    margin-top: 10%;
    padding: 20px;
    position: absolute;
    bottom: 20%;
    right: 32%;
    `
export const ImgPerfil = styled.img`
    width: 16%;
    height: 24%;
    float: left;
    position: relative;
    left: 8%;
    bottom: 70px;
`
export const DivPerfil = styled.div`
    background-color: #6a7dfe;
    display: block;
    width: 140%;
    height 40%;
    position: relative;
    right:0%;
    left:20%;
    padding:80px;
    margin-left: 0px;
    margin-right: 0px;
`
export const H1Perfil = styled.h1`
    position: relative;
    top: 90px;
    right:5%;
    font-size: 2em;
    
    
`
export const Perfilh2 = styled.h2`
    position: relative;
    bottom: 80px;
    left: 10%;
    display: block;
    font-size: 1.4em;
    font-weight: bold;
    text-align: left;

`
export const H1Vagas = styled.h1`
    position: relative;
    text-align: center;
    top: 40px;
    right:15%;
    font-size: 2em;
`