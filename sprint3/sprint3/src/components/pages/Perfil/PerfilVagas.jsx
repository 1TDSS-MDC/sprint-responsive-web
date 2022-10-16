import React, { useState } from 'react'
import { DivLista } from '../../Style/Styled'
import Vaga from '../Home/Vaga'

export default function ListaDeVagas() {

    const [tarefa, setTarefa] = useState([{
        nome:'Analista de sistema',
        tipo:'Estagiário',
        sobre:'A procura de candidatos que tenham fome de conhecimento' 
    },
    
])

    const [nTarefa, setNTarefa] = useState({
        nome:'', tipo:'', sobre:''
    })


    const addTarefa= e=> {
        
       e.preventDefault()

       setNTarefa({'nome':'', 'tipo':'','sobre':''})
    
    setTarefa([...tarefa,nTarefa])
}

    const captura= e=>{
        const {value, name} = e.target

        if(name === 'nome') { 
            //captura o nome da vaga
            setNTarefa({'nome':value, 'tipo':nTarefa.tipo, 'sobre':nTarefa.sobre})
        } else if(name === 'tipo') {
            //captura o tipo de vaga
            setNTarefa({'nome':nTarefa.nome, 'tipo':value, 'sobre':nTarefa.sobre})
        } else if(name === 'sobre') {
            //captura o sobre da vaga
            setNTarefa({'nome':nTarefa.nome, 'tipo':nTarefa.tipo, 'sobre':value})
        }
        
    }

    const removerTarefa = tar=>{
        let lista = tarefa
        lista = lista.filter((t)=> t!== tar)
        setTarefa(lista)
    }

  return (
    <DivLista>
        <div addTarefa={addTarefa} tarefa={nTarefa} digit={captura}/>
            {tarefa.map((tar, i)=>(
                <Vaga
                key={i}
                nome={tar.nome}
                tipo={tar.tipo}
                sobre={tar.sobre}
                remove={removerTarefa.bind(this,tar)}
                />
            ))}
        </DivLista>
  )
}