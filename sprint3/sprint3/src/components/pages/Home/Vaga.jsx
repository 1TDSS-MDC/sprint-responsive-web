import React from 'react'
import { DivTarefa } from '../../Style/Styled'
import {FaTrashAlt as X } from 'react-icons/fa';

export default function Vaga(props) {
  return (
    <DivTarefa>
      <p>Nome: {props.nome}</p>
      <p>Tipo: {props.tipo}</p>
      <p>Sobre: {props.sobre}</p>
      <button onClick={props.remove}><X/></button>
    </DivTarefa>
  )
}