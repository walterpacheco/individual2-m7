const pool = require('../db/pool');

const agregarUsuario = async (nombre) => {
    const consulta = {
        text: "INSERT INTO Users (nombre) VALUES ($1) RETURNING *",
        values: [nombre]
    };

    try {
        const response = await pool.query(consulta);
        console.log("Registro insertado:", response.rows[0]);
        return response.rows[0];  // Devuelve el registro insertado
    } catch (error) {
        console.error("Error al insertar:", error);
        throw error;  // Lanza el error para que el controlador o el índice lo gestione
    }
};

module.exports = {
    agregarUsuario
};
