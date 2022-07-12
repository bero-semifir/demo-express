// app express
const express = require('express');
// config dotenv
const dotenv = require('dotenv');
// logger: ici morgan
const logger = require('morgan');
// protection de l'API (helmet = casque en anglais, le casque protège les en-têtes)
const helmet = require('helmet');
dotenv.config();

// Import des routes
const UserRouter = require('./routes/User.route');

require('./config/database.config');
const PORT = process.env.API_PORT || 3000 

const app = express();

app.use(logger('combined'));

app.use(helmet())

app.use('/users', UserRouter);

app.get('/', (req, res)=>{
    res.send('Poulet')
})

app.listen(PORT, () => {
    console.log(`Écoute sur le port ${PORT}`.red);
});
