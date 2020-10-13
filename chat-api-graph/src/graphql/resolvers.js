import {fileLoader, mergeResolvers} from 'merge-graphql-schemas'
import path from 'path'

const resolversArray = fileLoader(path.join(__dirname,'Message','resolvers.js'))
const resolvers = mergeResolvers(resolversArray)


export default resolvers