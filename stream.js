const {createReadStream} = require('fs')
const { size } = require('lodash')

const stream = createReadStream('./some_random_stuffs',{encoding:'utf-8'})
stream.on('data' , (result)=>{
    console.log(result,'\n')
    
})
stream.on('error',(msg)=>{
    console.log(msg)
})
 