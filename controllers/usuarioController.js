const pool = require('../db/pool');

// Método para agregar un registro
const agregarUsuario = async (nombre, email, saldo) => {
    const consulta = {
        text: "INSERT INTO Users (nombre, email, saldo) VALUES ($1, $2, $3) RETURNING *",
        values: [nombre, email, saldo]
    };

    try {
        const response = await pool.query(consulta);
        console.log("Registro insertado:", response.rows[0]);
        return response.rows[0];  // Devuelve el registro insertado
    } catch (error) {
        console.error("Error al insertar:", error);
        throw error;
    }
};

// Método para modificar un registro
const modificarUsuario = async (id, nombre, email) => {
    const consulta = {
        text: "UPDATE Users SET nombre = $1, email = $2 WHERE id = $3 RETURNING *",
        values: [nombre, email, id]
    };

    try {
        const response = await pool.query(consulta);
        console.log("Registro modificado:", response.rows[0]);
        return response.rows[0];  // Devuelve el registro modificado
    } catch (error) {
        console.error("Error al modificar:", error);
        throw error;
    }
};

// Método para borrar un registro
const borrarUsuario = async (id) => {
    const consulta = {
        text: "DELETE FROM Users WHERE id = $1 RETURNING *",
        values: [id]
    };

    try {
        const response = await pool.query(consulta);
        console.log("Registro borrado:", response.rows[0]);
        return response.rows[0];  // Devuelve el registro borrado
    } catch (error) {
        console.error("Error al borrar:", error);
        throw error;
    }
};

module.exports = {
    agregarUsuario,
    modificarUsuario,
    borrarUsuario
};
