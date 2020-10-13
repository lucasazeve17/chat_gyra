import {fileLoader, mergeTypes} from 'merge-graphql-schemas'
import path from 'path'

const typesArray = fileLoader(path.join(__dirname,'Message','*.gql'))
const typesDefs = mergeTypes(typesArray)

// console.log(typesDefs)

export default typesDefs