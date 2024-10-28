const gateway = require('fast-gateway')

const port = 5000;

const server = gateway({
    routes:[
        {
            prefix:'/pedidos',
            target:'http://localhost:3000/',
            hooks:{}
        },
        {
            prefix:'/pagos',
            target:'http://localhost:4000/',
            hooks:{}
        }
    ]
});

server.start(port).then(server =>{
    console.log(`Gateway ejecutandose en el puerto:${port}`)
})