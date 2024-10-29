const { agregarUsuario, modificarUsuario, borrarUsuario } = require('./controllers/usuarioController');

// Ejemplo de uso: Agregar un usuario con nombre, email y saldo inicial
agregarUsuario('Carlos López', 'carlos.lopez@example.com', 20000)  // Incluye email y saldo inicial
    .then(result => console.log("Resultado de inserción:", result))
    .catch(error => console.error("Error en inserción:", error));

// Ejemplo de uso: Modificar un usuario
modificarUsuario(1, 'Carlos López Actualizado', 'carlos.actualizado@example.com')
    .then(result => console.log("Resultado de modificación:", result))
    .catch(error => console.error("Error en modificación:", error));

// Ejemplo de uso: Borrar un usuario
borrarUsuario(1)
    .then(result => console.log("Resultado de borrado:", result))
    .catch(error => console.error("Error en borrado:", error));
