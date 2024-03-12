// 1. IMPORTAR LIBRERIAS O VARIABLES EXTERNAS
const express = require('express');
const { connectMongo } = require('./utils/db')
const { ruedaRouter } = require('../La Suite/src/routes/rueda.routes');
const { ejeRouter } = require('./src/routes/eje.routes');
const { skateboardRouter } = require('./src/routes/skateboard.routes');


// 2. CONFIGURACIÓN DE LA APLICACIÓN
const PORT = 3001;
connectMongo()
const app = express();
app.use(express.json());



// 3. ENDPOINTS


app.get('/', (request, response) => {
    response.status(200).json({
        status: 200,
        message: "Bienvenido a La Suite SkateShop"
    });
});

app.use('/rueda', ruedaRouter);
app.use('/eje', ejeRouter);
app.use('/skateboard', skateboardRouter);


/* MANEJO DE ERRORES */
app.use((request, response, next) => {
    let error = new Error();
    error.status = 404;
    error.message = 'Not Found';
    next(error);
});
app.use((error, request, response, next) => {
    return response.status(error.status || 500).json(error.message || 'Unexpected error');
});

// 5. FUNCIÓN DE INICIO

app.listen(PORT, () => {
    console.log(`app running in port ${PORT}`);
});