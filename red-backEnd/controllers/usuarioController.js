import { db } from '../db/conn.js';

/*
  id,nombre,correo,contrasena
*/


const postUsuario = async (req, res)=>{

    const {nombre,correo,contrasena}=req.body;
    

    const params =[
        nombre,correo,contrasena
    ];


    const sql = `INSERT INTO usuario(nombre,correo,contrasena)
    VALUES ($1,$2,$3) returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};

const validaUsuario = async (req, res) => {
    
    const {correo,contrasena} = req.params;  
    
    const params =[
        correo,contrasena
    ];


    const sql = `SELECT id from usuario where correo = $1 and contrasena = $2`;

    const result = await db.query(sql, params);
    
    if (result.length === 0 ){
        res.status(404).json({mensaje: "Usuario y Contraseña no coinciden"})
    }else {
        res.json(result);
    }
    

}

const getUsuarioById = async (req, res) => {
    const {id} = req.params;
    const params =[        
        id
    ]; 
    const sql = `select  * from usuario where id = $1`;
    const resultUsuarioSql = await db.query(sql,params);

    const resultUsuario = resultUsuarioSql[0];    
    const nombre = resultUsuario.nombre;
    const correo= resultUsuario.correo;

    const elemento = {
        id,
        nombre,
        correo
    };


    res.json(elemento);

}


const getUsuario = async (req, res)=>{
    

    const sql = `select * from usuario`;
    const resultUsuario = await db.query(sql);

    res.json(resultUsuario);

};

const putUsuario = async (req, res)=>{
    const {nombre,correo,contrasena}=req.body;
    const {id} = req.params;

    const params =[
        nombre,correo,contrasena,
        id
    ];

    const sql = `update usuario 
                    set 
                    nombre = $1,
                    correo = $2,
                    contrasena = $3              
                    where id = $4 returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};

const delUsuario = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from usuario
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postUsuario,
    getUsuario,
    getUsuarioById,
    putUsuario,
    delUsuario,
    validaUsuario
};