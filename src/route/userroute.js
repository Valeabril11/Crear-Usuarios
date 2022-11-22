const { Router } = require('express');
const pool = require('../db.js')

const router = Router();

const { inicio, postusuario, putusuario, getusuario, deleteusuario } = require('../controllers/usercontrollers.js');


router.get('/', inicio);
router.get('/usuario', getusuario);
router.post('/usuario', postusuario);
router.put('/usuario', putusuario);
router.delete('/usuario', deleteusuario);

module.exports = router;