import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { Row, Col, FormInput, Button } from "shards-react";

import './style.css'

const POST_MESSAGE = gql`
mutation($user:String!, $content:String!){
  sendMessage(user: $user, content: $content)
}
`

export default function InputMessage({ user, content }) {

    const [state, setState] = useState({
        user,
        content
    })
    


    const [sendMessage] = useMutation(POST_MESSAGE)
    const onSend = () => {
        if (state.content.length > 0) {
            sendMessage({
                variables: state
            })

        }
        setState({
            ...state,
            content: ''
        })
    }

    return (
        <div>
            <Row className="row">
                <Col className="col" >
                    <FormInput className="form-input"
                        placeholder="Digite aqui ..."
                        label="Content"
                        value={state.content}
                        onChange={(event) => setState({ ...state, content: event.target.value })}
                        onKeyUp={(evt) => {
                            if (evt.keyCode === 13) {
                                onSend();
                            }
                        }}
                    />
                </Col>
                <Col className="col" style={{ padding: 0 }}>
                    <Button className="send-button" onClick={() => onSend()}>
                        Enviar
                    </Button>

                </Col>

            </Row>
        </div>
    )
}

