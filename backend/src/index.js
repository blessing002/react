const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/med'));

//stating the server
app.listen(app.get('port'), () =>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});