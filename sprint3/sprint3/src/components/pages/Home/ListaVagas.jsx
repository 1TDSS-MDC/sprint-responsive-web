import React, { useState } from 'react'
import { DivLista } from '../../Style/Styled'
import Vaga from './Vaga'

export default function ListaDeVagas() {

    const [tarefa, setTarefa] = useState([{
        nome:'Analista de sistema',
        tipo:'Estagiário',
        sobre:'A procura de candidatos que tenham fome de conhecimento' 
    },
    {
        nome:'Scrum Master',
        tipo:'Experiente',
        sobre:'A procura de um Scrum Master que possua facilidade em gerir equipes' 
    },
    {
        nome:'Front end dev',
        tipo:'Estagiário',
        sobre:'A procura de candidatos que tenham fome de conhecimento' 
    },
    {
        nome:'Java Developer',
        tipo:'Senior',
        sobre:'Requesitos: 3 ano de experiencia em desenvolvimento java' 
    },
    {
        nome:'Full Stack Dev',
        tipo:'junior',
        sobre:'A procura de candidatos capacitados, que suporte a demanda da empresa' 
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