const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome ")
    }
    if(req.url==='/about'){
        res.end("here is our short history")
    }
    else{
        res.end(
            `<h1>Ooopsies ${req.url} does not exist</h1>`
        )
    }

})

server.listen(5000)