'use strict'

const sql = require('mssql');

const config = {
    user: 'SeilyHerrera',
    password: 'uma@0203',
    server: 'DESKTOP-86HURG3',
    instanceName: 'SQLEXPRESS',
    port: 1433,
    database: 'ExamenPracticoSeily',
    options: {
        trustServerCertificate: true,   
    }
}

async function coneccionSQL(){
    let pool;
    try{
        pool = await sql.connect(config);

        console.log('Conexion correcta a la base de datos --');

        //creacion del servidor
        return pool;
    }
    catch(error){
        console.error('Error al conectar a la base de datos:',error);
    }/*finally{
        if(pool){
            try{
                console.log('Aca finaliza ');
                
                await pool.close();
            }catch(closeErr){
                console.error('Error al cerrar la conexion:', closeErr);
            }
        }
    }*/
}

module.exports = { coneccionSQL, sql};