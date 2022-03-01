const { Console } = require('console');
const http = require('http');
const PORT = process.env.PORT || 3400;

const {loadPlanetsData} = require('./models/planets.model');

const app = require('./app');

/**
 * Build the server in this way allow to work with other protocols like websockets 
 * and not only http req. 
 * Express is used in this example like a simple middleware that works with native http 
 * module.
 */
const server = http.createServer(app);

async function startServer(){
    await loadPlanetsData();

    server.listen(PORT, () => { 
        console.log(`Listening port ${PORT}`);
    });
}

startServer();






