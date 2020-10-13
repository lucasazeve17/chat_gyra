import { ApolloServer, PubSub } from 'apollo-server'
import mongoose from 'mongoose'

function StartServer({typeDefs,resolvers}){
    mongoose.connect('mongodb://localhost:27017/gyrachat',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    const pubsub = new PubSub()
    const server = new ApolloServer({typeDefs,resolvers,context:{pubsub} })
    
    server.listen(4444).then(({url})=>console.log(`Server started at ${url}`))
}

export default StartServer
