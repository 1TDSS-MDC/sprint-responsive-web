import React from 'react'
import { DivForm } from '../../Style/Styled'


export default function FormVagas(props) {

    return(
        <DivForm>
            <h3>Cadastro de vagas:</h3>
            <form method="post" onSubmit={props.addTarefa}>
                <div>
                    <input name='nome' placeholder='Nome da vaga' 
                    value={props.tarefa.nome} onChange={props.digit} />
                </div>
                <div>
                    <input name='tipo' placeholder='Tipo da vaga' 
                    value={props.tarefa.idade} onChange={props.digit} />
                </div>
                <div>
                    <input name='sobre' placeholder='Descrisão' 
                    value={props.tarefa.raca} onChange={props.digit} />
                </div>
                <button type='submit'>Cadastrar Vaga</button>
            </form>
        </DivForm>
    )
}