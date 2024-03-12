const mongoose = require('mongoose');

const pass = 'mongodb+srv://pedroleonelceb:_Stennetsb1@lasuite.zknq1pg.mongodb.net/?retryWrites=true&w=majority&appName=LaSuite';

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(pass);
        console.log('INFO: Conexión a BD correcta:', conn.connection.name)
    } catch (error) {
        console.log('ERROR: (f connectMongo) ->', error.message);
    }
}

module.exports = { connectMongo };