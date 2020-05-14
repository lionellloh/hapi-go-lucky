var Hapi = require('hapi');
var server = Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});


server.route({
    method: 'GET',        // define the method this route will handle
    path: `/{name*}`, // this is how you capture route parameters in Hapi
    handler: ((req, h) => {
        console.log(req.params);
        return `Hello ${encodeURIComponent(req.params.name)}`
    })
});

async function startServer() {
    await server.start() // start the Hapi server on your localhost
    console.log('Now Visit: http://localhost:' + server.info.port + '/');
}

startServer();

module.exports = server;



