const express = require('express');
const bodyParser = require('body-parser');
const RecipeRoutes = require('./Routes/RecipeRoutes');
const server = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectMongoDB = require('./Config/ConfigDB');

//middleware
server.use(bodyParser.json());

//database connection
connectMongoDB();

//routes
server.use("/api/recipes", RecipeRoutes);

server.listen(port,()=>{
    console.log(`server started successfully in port:${port}`);
})
