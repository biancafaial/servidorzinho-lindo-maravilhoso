const comidas ={ pratosFavoritos: [
    {
      "nome" :  " Batata frita " ,
      "descricao" :  " Cras sit sit nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      "imagem" :  " img/Batata-frita.jpg "
    },
    {
      "nome" :  " Macarronada " ,
      "descricao" :  " Cras sit sit nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      "imagem" :  " img/macarronada.jpg "
    },
    {
      "nome" :  " Falafel " ,
      "descricao" :  " Cras sit sit nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      "imagem" :  " img/falafel.jpg "
    },
    {
      "nome" :  " Creme de abóbora " ,
      "descricao" :  " Cras sit sit nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. " ,
      "imagem" :  " img/creme-de-abobora.jpg "
    }
  
  ]
}

const getAll = ()=>{
    return comidas
}

module.exports = {
    getAll
}