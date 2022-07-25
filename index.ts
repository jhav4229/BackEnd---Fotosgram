import Server from "./classes/server";
import userRoutes from "./routes/usuario";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const server = new Server();


//Body parser
server.app.use( bodyParser.urlencoded( { extended: true}));
server.app.use( bodyParser.json() );

//Rutas de mi aplicacion
server.app.use('/user', userRoutes);

//Conectar DB
mongoose.connect( 'mongodb://localhost:27017/fotosgram', (err) =>{
    if( err ) throw err;
    console.log('Base de datos ONLINE');
});

//Levantar express
server.start( () => {
    console.log (`Servidor coriendo en el puerto ${server.port}`);
});