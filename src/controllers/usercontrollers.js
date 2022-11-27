const pool = require('../db.js')

const inicio = async (req, res, next) => {
    // respuesta = {
    //     error: true,
    //     codigo: 200,
    //     mensaje: 'Punto de inicio',
    //     hola: 'tequiero'
    // };
    // res.send(respuesta);
try{
    const usuario = await pool.query('SELECT * FROM usuario') // usuario es el nombre de mi tabla
    console.log (usuario);
    res.json(usuario.rows)
}catch(error){
    next(error)
}

}
const getusuario = async (req, res, next ) => {
 
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

const {nombre, apellido, fechaDeNacimiento, email, pais, provinia} =req.body
try {
    const result = await pool.query("INSERT INTO usuario (nombre,apellido,fechaDeNacimiento,email,pais,provinia) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*", [
        nombre,
        apellido,
        fechaDeNacimiento,
        email,
        pais,
        provinia
    ]);
    console.log(result)
    res.json(result.rows[0])
} catch (error) {
    next(error);
}

}
const putusuario = async (req, res, next) => {


    const { id } = req.params
    const {nombre, apellido, fechaDeNacimiento, email, pais, provinia} =req.body
    try {
        const usuario = await pool.query('UPDATE usuario SET nombre = $1 , apellido= $2, fechaDeNacimiento= $3, email= $4, pais= $5 , provinia= $6 WHERE id = $7 RETURNING *', 
        [nombre, apellido,fechaDeNacimiento,email,pais,provinia, id])

        if (usuario.rows.length === 0) {
            return res.status(404).json({
                mensaje: 'No se encontro el usuario',
            })
        }
        res.send(usuario.rows[0])

    } catch (error) {
       next(error)
    }

}
const deleteusuario = async(req, res,next) => {

    const { id } = req.params
    console.log(id)
    try {
        const usuario = await pool.query('DELETE FROM usuario WHERE id = $1', [id])
        if (usuario.rowCount === 0) {
            return res.status(404).json({
                mensaje: 'No se encontro el usuario',
            })
        }
        res.json({message:'eliminando usuario'})

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