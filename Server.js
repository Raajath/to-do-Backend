const express =require('express')
    const mongoose = require('mongoose')
    require('dotenv').config()
    const cors = require("cors");
    const app = express()
    const PORT =process.env.port || 5000

    app.use(express.json());
    app.use(cors());
    
    const routes = require("./routes/ToDoRoute" )

    //mongoDB Connection
 mongoose
.connect(process.env.MONGODB_URL)
 .then(()=> console. log("Connected To MongoDB..."))//call back function
 .catch((err) => console. log(err)) 

    
 app.use(routes)


    app.listen(PORT,() => console.log(`listening on: ${PORT}`))
    