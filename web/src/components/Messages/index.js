import React from 'react'
import { useSubscription, gql } from '@apollo/client';

import './style.css'

const GET_MESSAGES = gql`
  subscription{
    messages {
      _id
      content
      user
    }
  }
`;


export default function Messages({ user }) {
    const { data } = useSubscription(GET_MESSAGES)
    
    
    if (!data) {
        return null
    }


    return (
        <div className="message-container">
  
            {data.messages.map(({ user: messageUser, content, _id }) => (
              
                        <div
                            key={_id}
                            style={{
                                display: "flex",
                                justifyContent: user === messageUser ? "flex-end" : "flex-start",
                                paddingBottom: "1em",
                            }}
                        >
                            {user !== messageUser && (
                                <div className="username">
                                    {messageUser.substring(0,10) }{messageUser.length>10?"...":""}
                                </div>
                            )}
                            <div className="message"
                                style={{
                                    background: user === messageUser ? "#58bf56" : "#fff",
                                    color: user === messageUser ? "white" : "black",
                                    
                                }}
                            >
                                {content}
                            </div>
                        </div>
                  
               
            ))}
        </div>

    )
}

