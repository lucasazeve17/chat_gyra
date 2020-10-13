import Message from '../../models/Message'
const subscribers = []
const onMessagesUpdates = (fn) => subscribers.push(fn)

export default {
    
    Query: {
        messages: () => Message.find()
    },
    Mutation: {
        sendMessage: async(_, { user, content }) => {
            const message =  await Message.create({user,content})

            subscribers.forEach((fn) => fn())
            return message.id
        },
    },
    Subscription: {
        messages: {
            subscribe: async(parent, args, { pubsub }) => {
                
                
                
                const channel = Math.random().toString(36).slice(2, 15);
                onMessagesUpdates(() =>  pubsub.publish(channel,{messages:Message.find()}));
                    setTimeout(async() => await pubsub.publish(channel,{messages:Message.find()} ), 0);
                return pubsub.asyncIterator(channel);
            }
        },
    },
};


