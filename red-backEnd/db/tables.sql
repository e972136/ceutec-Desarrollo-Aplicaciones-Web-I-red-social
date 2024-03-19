-- Active: 1705979042290@@localhost@5432@clase@public
CREATE TABLE usuario(      
    id SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(255),
    correo VARCHAR(255),
    contrasena VARCHAR(255)
);

create table posteo(
    id SERIAL NOT NULL PRIMARY KEY,
    id_usuario int,
    comentario VARCHAR(255),
    comentario_date date,    
    CONSTRAINT fk_usuario
      FOREIGN KEY(id_usuario) 
        REFERENCES usuario(id)
)

create table comentario(
    id SERIAL NOT NULL PRIMARY KEY,
    id_usuario int,
    id_posteo int,
    comentario VARCHAR(255),
    comentario_date date,    
    CONSTRAINT fk_usuario
      FOREIGN KEY(id_usuario) 
        REFERENCES usuario(id),
    CONSTRAINT fk_posteo
      FOREIGN KEY(id_posteo) 
        REFERENCES posteo(id)      
);

insert into usuario(nombre, correo, contrasena)
values ('Gaspar','gaspar@algo.com','123');
insert into usuario(nombre, correo, contrasena)
values ('Patito','patito@algo.com','123');

insert into posteo(id_usuario,comentario,comentario_date)
values (1,'Primer Posteo',now());

insert into comentario(id_usuario,id_posteo,comentario,comentario_date)
values (2,1,'Feo tu comentario',now());