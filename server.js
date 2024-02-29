const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 4000; 


// Swagger dependencies
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");


// Set up swaager
const swaggerDefinition = yaml.load("./api/docs/swagger.yaml");
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition, { explorer: true }));





app.use(cors());
app.use(express.json());
app.use(require("./api/routes/index"));


// get driver connection
const connectDB = require("./db/conn");
console.log(`The node environment is: ${process.env.NODE_ENV}`);


// Production environment: connect to the database and start listening for requests
if (process.env.NODE_ENV !== "test") {
   connectDB();
   app.listen(port, () => {
     setTimeout(() => {
       console.log(`All services are running on port: ${port}`);
     }, 1000); // Add a 1-second delay
   });
}


module.exports = app; // Export the app instance for unit testing via supertest.