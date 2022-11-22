CREATE DATABASE users

CREATE TABLE usuario(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    fechaDeNacimiento DATE NOT NULL,
    email VARCHAR(255) NOT NULL,
    pais VARCHAR(255) NOT NULL,
    provinia VARCHAR(255) NOT NULL
);