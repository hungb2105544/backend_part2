const app = require('./app');
const config = require('./app/config'); 
const MongoDB = require('./app/utils/mongodb.util');

async function startServer(){
    try{
        await MongoDB.connect(config.dp.uri);
        console.log('Connected to database successfully');

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    }catch(e){
        console.log("Cannot connect to database", e);
        process.exit();
    }
}

startServer();