const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

require('./config/database.config');
const PORT = process.env.API_PORT || 3000 
const app = express();

app.get('/', (req, res)=>{
    res.send('Poulet')
})

app.listen(PORT, () => {
    console.log(`Écoute sur le port ${PORT}`.red);
});
