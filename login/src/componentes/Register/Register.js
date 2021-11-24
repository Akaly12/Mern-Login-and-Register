import React, { useState } from "react";
import "./register.css"
import axios from "axios"

const Register = () => {
    
    const [ user, setUser ] = useState({
        nome: "",
        email: "",
        senha: "",
        reEnterPassowrd: "",
        numero: "",
    })
    
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const  Register = () => {
        const { nome, email, senha, reEnterPassowrd } = user
        if( nome && email && senha && (senha === reEnterPassowrd)){
            axios.post("http://localhost:9002/register", user)
            .then(res => console.log(res))
       } else{
           alert("invalid input")
       }
        
    }

    return (
        <div className="Register">
            {console.log("User, user")}
            <h1>Registre-se</h1>
            <input type="text" name="nome" value={user.nome} placeholder="Seu Nome" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email}placeholder="Seu Email"onChange={ handleChange }></input>
            <input type="Senha" name="senha" value={user.senha}placeholder="Sua senha"onChange={ handleChange }></input>
            <input type="Senha" name="reEnterPassowrd" value={user.reEnterPassowrd}placeholder="Sua senha denovo"onChange={ handleChange }></input>
            <input type="text" name="numero" value={user.numero}placeholder="Seu Numero"onChange={ handleChange }></input>
            <div className="Button" onClick={Register}>Registre-se</div>
            <div>ou</div>
            <div className="button">Login</div>
        </div>
    )
}

export default Register