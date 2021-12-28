const express = require('express');
const app = express()
require('./models/DBConfig')
const postsRoutes = require('./routes/postsController');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', postsRoutes);

app.listen(5500, () => console.log("Serveur started: 5500"));


// FROM SCRATCH - DEV WEB , Créer une API
