const http = require('http')

const servidor = http
.createServer(function (request, response){
    if (request.url === '/'){
        response.end('Hello word')
    }
})
servidor.listen(3000)