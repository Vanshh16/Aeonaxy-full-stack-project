const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const route = require("./router.js");
const connectDatabase = require("./db.js");

const app = express();

const PORT = process.env.PORT || 4000;

// config
dotenv.config({path:"./config/config.env"});

// Connect Database
connectDatabase();

app.use(cors());
app.use(express.json());
app.use("/", route);


app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
})