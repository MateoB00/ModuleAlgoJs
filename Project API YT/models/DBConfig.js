const mongoose = require('mongoose')
mongoose.connect(
    "mongodb://localhost:27017/Node-api",
    { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) 
        console.log("Mongo Connected");
        else 
        console.log("Connection error :" + err);
    }
)