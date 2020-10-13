import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import './style.css'

export default function Form() {
    const history = useHistory()
    const [username,setUsername] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (username.length > 0){
            localStorage.setItem("username",username);
            history.push('/chat')
        }

    }
        return (
            <div className="login-container">
                <h1 className="title">Chat Gyra<span>+</span></h1>
                <form className="form-login" onSubmit={handleSubmit}>
                <input maxLength="10" className="username-input" type="text" placeholder="Digite um username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <button className="button-login" type="submit" >
                        Entrar
                    </button>  
                </form>
            </div>
        )
}
