'use strict'

const { coneccionSQL, sql } = require('../connectionDB');


//Create
async function createProject(data){
    try{
        const pool = await coneccionSQL();
        const result = await pool.request()
        .input('NombreComercial', sql.NVarChar, data.NombreComercial)
        .input('RazonSocial', sql.NVarChar, data.RazonSocial)
        .input('Telefono', sql.Int, data.Telefono)
        .input('Email', sql.NVarChar, data.Email)
        .input('NIT', sql.NVarChar, data.NIT)
        .input('Estado', sql.NVarChar, data.Estado)
        .input('Direccion', sql.NVarChar, data.Direccion)
        .query(`INSERT INTO Empresa (NombreComercial, RazonSocial, Telefono, Email, NIT, Estado, Direccion)
            VALUES (@NombreComercial, @RazonSocial, @Telefono, @Email, @NIT, @Estado, @Direccion)`);

        await pool.close();
        return result.rowsAffected;
    }catch(err){
        console.error('Error creando el projecto', err);
        throw err;
    }
}

//Read
async function getProjects(){
    try {
        const pool = await coneccionSQL();
        const result = await pool.request().query('SELECT * FROM Empresa');
        await pool.close();
        return result.recordset;   
    } catch (error) {
        console.log('error: ' + error);
    }
}

async function getONEProjects(id){
    try {
        const pool = await coneccionSQL();
        const result = await pool.request().query(`SELECT * FROM Empresa WHERE IDEmpresa=${id}`);
        await pool.close();
        return result.recordset;   
    } catch (error) {
        console.log('error: ' + error);
    }
}

//Update
async function updateProject(id, data){
    try {
        const pool = await coneccionSQL();
        const result = await pool.request()
        .input('IDEmpresa', sql.Int, id)
        .input('NombreComercial', sql.NVarChar, data.NombreComercial)
        .input('RazonSocial', sql.NVarChar, data.RazonSocial)
        .input('Telefono', sql.Int, data.Telefono)
        .input('Email', sql.NVarChar, data.Email)
        .input('NIT', sql.NVarChar, data.NIT)
        .input('Estado', sql.NVarChar, data.Estado)
        .input('Direccion', sql.NVarChar, data.Direccion)
        .query(`UPDATE Empresa SET NombreComercial = @NombreComercial, RazonSocial = @RazonSocial, Telefono = @Telefono, Email = @Email, NIT = @NIT, Estado = @Estado, Direccion = @Direccion 
                WHERE IDEmpresa = @IDEmpresa `);
        await pool.close();
        return result.rowsAffected;
    }catch(err){
        console.error('Error creando el projecto', err);
        throw err;
    }
}

//Delete
async function deleteProject(id) {
    const pool = await coneccionSQL();
    const result = await pool.request()
    .input('IDEmpresa', sql.Int, id)
    .query('DELETE FROM Empresa WHERE IDEmpresa = @IDEmpresa');
    return result.rowsAffected;
}

module.exports = { createProject, getProjects,getONEProjects, updateProject, deleteProject };

