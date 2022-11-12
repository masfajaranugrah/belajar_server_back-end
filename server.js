const master = require('@hapi/hapi');
// const router = require('./router');


const masterCrv = async () => {
    const server = master.server({
        port: 5000,
        host: "localhost",
    });

    // server.route(router);
    
    await server.start();
    console.log(`server started in ${server.info.uri}`);
}

masterCrv();