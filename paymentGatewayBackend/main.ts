//Importing dependencies
import express = require("express");
import helmet = require("helmet");
import cors = require("cors");
import bodyParser = require("body-parser");
import { Application } from "express";

//Configuring application environments
const MainApp: Application = express();
const corsConfig = {
    origin: process.env.DOMAIN,
    optionsSuccessStatus: 200
}
MainApp.set("PORT", process.env.PORT);

//Configuring middlewares
MainApp.use(helmet())
MainApp.use(cors(corsConfig))
MainApp.use(bodyParser.json())
MainApp.use(bodyParser.urlencoded({ extended: true }))

export default MainApp