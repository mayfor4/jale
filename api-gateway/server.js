const gateway = require('fast-gateway')

const port = 1000;

const server = gateway({
    routes:[
        {
            prefix:'/pedidos',
            target:'http://localhost:2000/',
            hooks:{}
        },
        {
            prefix:'/pagos',
            target:'http://localhost:3002/',
            hooks:{}
        }
    ]
});

server.start(port).then(server =>{
    console.log(`Gateway ejecutandose en el puerto:${port}`)
})