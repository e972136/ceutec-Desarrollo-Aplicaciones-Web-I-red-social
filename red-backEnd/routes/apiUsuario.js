import express from 'express';
import {
    postUsuario,
    getUsuario,
    getUsuarioById,
    putUsuario,
    validaUsuario,
    delUsuario
} from "../controllers/usuarioController.js";


const usuario = express();

usuario.post('',postUsuario);
usuario.get('',getUsuario);
usuario.get('/auth/:correo/:contrasena',validaUsuario);
usuario.get('/:id',getUsuarioById);
usuario.put('/:id',putUsuario);
usuario.delete('/:id',delUsuario);


export {usuario};