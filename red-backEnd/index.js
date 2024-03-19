import express from 'express';
import cors from 'cors';

import { usuario } from './routes/apiUsuario.js';



const app = express();

const port = 9090;

//middlewares
app.use(express.json());

const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));


app.use("/api/usuario",usuario);


app.listen(port,()=>{
    console.log(`Se escucha en ${port}`);
});