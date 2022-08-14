const {readFile,writeFile}= require('fs')

const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise= util.promisify(writeFile)



// how to resolve a promise?
//  1. it returns a resolve and reject 
//  .then gets the result annd .catch gets the error


const start = async () =>{
    try{
        const first = await readFilePromise('./some_random_stuffs','utf-8')
        const second= await writeFilePromise('./some_random_stuffs','utf-8')
        console.log(first,second)
    }
    catch(error) {
        console.log(error)
    }
    
}

start()
