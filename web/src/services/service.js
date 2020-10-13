import { ApolloClient, InMemoryCache } from '@apollo/client';

import {WebSocketLink} from '@apollo/client/link/ws'



const link = new WebSocketLink({
    uri:`ws://localhost:4444/graphql`,
    reconnect:true,
   
  
    
})
const client = new ApolloClient({
    link ,
    uri: "http://localhost:4444",
    cache: new InMemoryCache(),
    

})

export default client