const Hapi = require('hapi');
const server = new Hapi.Server({port: Number(process.argv[2] || 3000)}); // tell hapi which TCP Port to "listen" on

const ROUTE_NAME = "lionell"
server.route({
    method: 'GET',        // define the method this route will handle
    path: `/`, // this is how you capture route parameters in Hapi
    handler: ((req, h) => {
        return `Hello hapi`
    })
});

async function startServer() {
    await server.start() // start the Hapi server on your localhost
    console.log('Now Visit: http://localhost:' + server.info.port + '/');
}

startServer();

module.exports = server;
