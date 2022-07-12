const mongoose = require('mongoose');
require('colors');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';

const mongoConnect = async () => {
    const connection = await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connecté au serveur mongo sur'.green, `${connection.connection.host}`.yellow.bold)
};

mongoConnect();