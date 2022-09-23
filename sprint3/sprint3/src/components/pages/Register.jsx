import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../LayoutComponents";
import "../assets/global.css";

export default function Register (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [idade,setIdade] = useState("");

    return(
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-tittle"> Criar Conta </span>
            
                <div className="wrap-input">
                    <input 
                        className={name !== "" ? "has-val input" : "input"}
                        type="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "Nome"></span>
                </div>
                
                <div className="wrap-input">
                    <input 
                        className={cpf !== "" ? "has-val input" : "input"}
                        type="cpf" 
                        value={cpf} 
                        onChange={(e) => setCpf(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "CPF"></span>
                </div>
                
                <div className="wrap-input">
                    <input 
                        className={idade !== "" ? "has-val input" : "input"}
                        type="idade" 
                        value={idade} 
                        onChange={(e) => setIdade(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "Idade"></span>
                </div>

                <div className="wrap-input">
                    <input 
                        className={email !== "" ? "has-val input" : "input"}
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "Email"></span>
                </div>

                <div className="wrap-input">
                    <input 
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <span className="focus-input" data-placeholder = "Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Registrar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui conta?</span>
                    <Link className="txt2" to="/login">
                        Fazer login
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    )
}
