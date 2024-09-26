'use strict'

const { createProject, getProjects, updateProject, deleteProject, getONEProjects } = require('../modells/projectM');

async function ObtenerProjecto(req, res) {
    try {
        const projects = await getProjects();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).send({message:'Error al obtener el projecto'});
    }
}

async function ObtenerONEProjecto(req, res) {
    try {
        const projectId = req.params.id;
        const projects = await getONEProjects(projectId);
        
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).send({message:'Error al obtener el projecto'});
    }
}

async function addProjecto(req, res) {
    try {
        console.log(req.body);
        
        const data = req.body;
        if ((data.NombreComercial != undefined && data.NombreComercial != null && data.NombreComercial != '') ||
            (data.RazonSocial != undefined && data.RazonSocial != null && data.RazonSocial != '') ||
            (data.Telefono != undefined && data.Telefono != null && data.Telefono != 0) ||
            (data.Email != undefined && data.Email != null && data.Email != '') ||
            (data.NIT != undefined && data.NIT != null && data.NIT != '') ||
            (data.Estado != undefined && data.Estado != null && data.Estado != '') ||
            (data.Direccion != undefined && data.Direccion != null && data.Direccion != '')) {
            const result = await createProject(data);
            if (result) {
                res.status(201).send({message:'Projecto creado correctamente'});
            } else {
                res.status(400).send({message:'No fue posible crear el projecto'});
            }
        } else {
            res.status(404).send({message:'Todos los campos son obligatorios.'});
        }

    } catch (err) {
        res.status(500).send({message:'Error al ingresar los datos: ' + err});
    }
}

async function actualizarProjecto(req, res) {
    try {
        const projectId = req.params.id;
        const data = req.body;
        const result = await updateProject(projectId, data);
        if (result) {
            res.status(200).send({message:'Datos actualizados correctamente'});
        } else {
            res.status(400).send({message:'No se pudo actualizar los datos'});
        }
    } catch (err) {
        res.status(500).send({message:'Error al actualizar'});
        console.log({err});
        
    }
}

async function eliminarProjecto(req, res) {
    try {
        const projectId = req.params.id;
        const result = await deleteProject(projectId);
        if (result) {
            res.status(200).send({message:'Datos eliminado correctamente'});
        } else {
            res.status(200).send({message:'Los datos no se han podido eliminar'});
        }
    } catch (err) {
        res.status(500).send({message:'Error al eliminar el projecto'});
    }
}

module.exports = { ObtenerProjecto, ObtenerONEProjecto,addProjecto, actualizarProjecto, eliminarProjecto };