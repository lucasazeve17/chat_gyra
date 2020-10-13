import React from 'react'
import {
    ApolloProvider,
} from '@apollo/client';

import './style.css'
import { Container } from "shards-react";
import {FiArrowLeft} from 'react-icons/fi'



import client from '../../services/service'
import Messages from '../../components/Messages'
import InputMessage from '../../components/InputMessage'
import { useHistory } from 'react-router-dom';



const Chat = () => {
    const [state] = React.useState({
        user: localStorage.getItem("username"),
        content: ''
    })
   

    const history = useHistory()

    function handleLogof() {
        localStorage.setItem("username", "")
        history.push('/')
    }



    return (
        <Container >

            <button className="logof-button" onClick={() => handleLogof()}>
                <FiArrowLeft size={12} color="#fff"/>
                Sair
            </button>

            <Messages user={state.user}/>

            <InputMessage user={state.user} content={state.content} />
        </Container>
    )
}


export default () => (
    <ApolloProvider client={client}>
        <Chat />
    </ApolloProvider>
)

