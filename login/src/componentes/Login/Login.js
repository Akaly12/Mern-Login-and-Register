import React, { useState } from "react"
import "./login.css"

const Login = () => {

    const [ user, setUser ] = useState({
        email: "",
        senha: "",
    })
    
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={ handleChange } placeholder="Entre com seu Email"></input>
            <input type="Senha" name="senha" value={user.senha} onChange={ handleChange } placeholder="Entre com sua Senha"></input>
            <div className="Button">Entrar</div>
            <div>ou</div>
            <div className="button">Registrar-se</div>
        </div>
    )
}

export default Login