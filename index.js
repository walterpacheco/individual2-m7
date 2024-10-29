const { agregarUsuario } = require('./controllers/usuarioController');

// Llamada a la función con un valor de ejemplo
agregarUsuario('Juan Perez')
    .then(result => console.log("Resultado:", result))
    .catch(error => console.error("Error:", error));
