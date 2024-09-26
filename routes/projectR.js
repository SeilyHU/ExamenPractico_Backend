'use strict'

var express = require('express');
var ProjectController = require('../controllers/projects');

var router = express.Router();


router.post('/crear', ProjectController.addProjecto);//agregar archivos
router.get('/leer', ProjectController.ObtenerProjecto);//mostrar todos los archivos
router.get('/leer/:id', ProjectController.ObtenerONEProjecto);//mostrar todos los archivos
router.put('/actualizar/:id', ProjectController.actualizarProjecto);//actualizar
router.delete('/eliminar/:id',ProjectController.eliminarProjecto);//eliminar

module.exports = router;