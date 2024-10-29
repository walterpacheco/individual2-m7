const { agregarUsuario, modificarUsuario, borrarUsuario } = require('./controllers/usuarioController');

// Ejemplo de uso: Agregar un usuario
agregarUsuario('Carlos López')
    .then(result => console.log("Resultado de inserción:", result))
    .catch(error => console.error("Error en inserción:", error));

// Ejemplo de uso: Modificar un usuario
modificarUsuario(1, 'Carlos López Actualizado')
    .then(result => console.log("Resultado de modificación:", result))
    .catch(error => console.error("Error en modificación:", error));

// Ejemplo de uso: Borrar un usuario
borrarUsuario(1)
    .then(result => console.log("Resultado de borrado:", result))
    .catch(error => console.error("Error en borrado:", error));
