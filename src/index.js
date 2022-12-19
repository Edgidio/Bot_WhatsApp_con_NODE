const app = require('./app')

// correr el servidor
app.listen(app.get('PORT'), () => {
    console.log(`Servidor corriendo`)
})