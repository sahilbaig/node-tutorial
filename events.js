const eventEmitter =  require('events');
const customEmitter = new eventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`Hello there ${name} with id: ${id} `)
})

customEmitter.emit('response','john',12)