const { Router } = require('express');
const pool = require('../db.js')

const router = Router();

const { inicio, postusuario, putusuario, getusuario, deleteusuario } = require('../controllers/usercontrollers.js');


router.get('/', inicio);
router.get('/usuario/:id', getusuario);
router.post('/usuario', postusuario);
router.put('/usuario/:id', putusuario);
router.delete('/usuario/:id', deleteusuario);

module.exports = router;