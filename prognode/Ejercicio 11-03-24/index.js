// 1. IMPORTAR LIBRERIAS O VARIABLES EXTERNAS
const express = require('express');
const { connectMongo } = require('./utils/db')
const { motoRouter } = require('./src/routes/moto.routes');
const { scooterRouter } = require('./src/routes/scooter.routes');


// 2. CONFIGURACIÓN DE LA APLICACIÓN
const PORT = 3001;
connectMongo()
const app = express();
app.use(express.json());



// 3. ENDPOINTS


app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: "El servidor funciona"
    });
});

app.use('/moto', motoRouter);
app.use('/scooter', scooterRouter);


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