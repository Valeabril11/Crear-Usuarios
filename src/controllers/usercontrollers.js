const pool = require('../db.js')

const inicio = (req, res) => {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio',
        hola: 'tequiero'
    };
    res.send(respuesta);
}
const getusuario = async (req, res, next ) => {
    // respuesta = {
    //     error: false,
    //     codigo: 200,
    //     mensaje: ''
    // };
    // if (usuario.nombre === '' || usuario.apellido === '') {
    //     respuesta = {
    //         error: true,
    //         codigo: 501,
    //         mensaje: 'El usuario no ha sido creado'
    //     };
    // } else {
    //     respuesta = {
    //         error: false,
    //         codigo: 200,
    //         mensaje: 'respuesta del usuario',
    //         respuesta: usuario
    //     };
    // }
    // res.send(respuesta);

    // const result = await pool.query('SELECT NOW()')
    // console.log(result.rows)
    // res.json(result.rows[0].now)

    const { id } = req.params
    console.log(id)
    try {
        const usuario = await pool.query('SELECT * FROM usuario WHERE id = $1', [id])
        if (usuario.rows.length === 0) {
            return res.status(404).json({
                mensaje: 'No se encontro el usuario',
            })
        }
        res.json(usuario.rows[0])

    } catch (error) {
        next(error)
    }
}
const postusuario = async (req, res, next) => {
    // if (!req.body.nombre || !req.body.apellido) {
    //     respuesta = {
    //         error: true,
    //         codigo: 502,
    //         mensaje: 'El campo nombre y apellido son requeridos'
    //     };
    // } else {
    //     if (usuario.nombre !== '' || usuario.apellido !== '') {
    //         respuesta = {
    //             error: true,
    //             codigo: 503,
    //             mensaje: 'El usuario ya fue creado previamente'
    //         };
    //     } else {
    //         usuario = {
    //             nombre: req.body.nombre,
    //             apellido: req.body.apellido
    //         };
    //         respuesta = {
    //             error: false,
    //             codigo: 200,
    //             mensaje: 'Usuario creado',
    //             respuesta: usuario
    //         };
    //     }
    // }

    // res.send(respuesta);
const {nombre, apellido, fechaDeNacimiento, email, pais, provincia} =req.body
try {
    const result = await pool.query("INSERT INTO usuario (nombre,apellido,fechaDeNacimiento,email,pais,provincia) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*", [
        nombre,
        apellido,
        fechaDeNacimiento,
        email,
        pais,
        provincia
    ]);
    console.log(result)
    res.json(result.rows[0])
} catch (error) {
    next(error);
}

}
const putusuario = async (req, res, next) => {
    // if (!req.body.nombre || !req.body.apellido) {
    //     respuesta = {
    //         error: true,
    //         codigo: 502,
    //         mensaje: 'El campo nombre y apellido son requeridos'
    //     };
    // } else {
    //     if (usuario.nombre === '' || usuario.apellido === '') {
    //         respuesta = {
    //             error: true,
    //             codigo: 501,
    //             mensaje: 'El usuario no ha sido creado'
    //         };
    //     } else {
    //         usuario = {
    //             nombre: req.body.nombre,
    //             apellido: req.body.apellido
    //         };
    //         respuesta = {
    //             error: false,
    //             codigo: 200,
    //             mensaje: 'Usuario actualizado',
    //             respuesta: usuario
    //         };
    //     }
    // }

    // res.send(respuesta);

    const { id } = req.params
    const {nombre, apellido, fechaDeNacimiento, email, pais, provincia} =req.body
    try {
        const tabla = await pool.query('UPDATE usuario SET nombre = $1 , apellido= $2, fechaDeNacimiento= $3, email= $4, pais= $5 , provincia= $6 WHERE id = $7 RETURNING *', 
        [nombre, apellido,fechaDeNacimiento,email,pais,provincia, id])

        if (tabla.rows.length === 0) {
            return res.status(404).json({
                mensaje: 'No se encontro el usuario',
            })
        }
        res.send(tabla.rows[0])

    } catch (error) {
       next(error)
    }

}
const deleteusuario = async(req, res,next) => {
    // if (!req.body.nombre || !req.body.apellido) {
    //     respuesta = {
    //         error: true,
    //         codigo: 502,
    //         mensaje: 'El campo nombre y apellido son requeridos'
    //     };
    // } else {
    //     if (usuario.nombre === '' || usuario.apellido === '') {
    //         respuesta = {
    //             error: true,
    //             codigo: 501,
    //             mensaje: 'El usuario no ha sido creado'
    //         };
    //     } else {
    //         usuario = {
    //             nombre: req.body.nombre,
    //             apellido: req.body.apellido
    //         };
    //         respuesta = {
    //             error: false,
    //             codigo: 200,
    //             mensaje: 'Usuario actualizado',
    //             respuesta: usuario
    //         };
    //     }
    // }

    // res.send(respuesta);

    const { id } = req.params
    console.log(id)
    try {
        const usuario = await pool.query('DELETE FROM usuario WHERE id = $1', [id])
        if (usuario.rowCount === 0) {
            return res.status(404).json({
                mensaje: 'No se encontro el usuario',
            })
        }
        res.sendstatus(204)

    } catch (error) {
        next(error)
    }
}
module.exports = {
    inicio,
    getusuario,
    postusuario,
    putusuario,
    deleteusuario,
}