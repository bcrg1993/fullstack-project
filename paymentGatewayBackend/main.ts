//Importing dependencies
import express = require("express");
import helmet = require("helmet");
import cors = require("cors");
import bodyParser = require("body-parser");

import { Application } from "express";
import { CountryRoute } from "./route/country.route";
import { CommerceRoute } from './route/commerce.route';
import { ExceptionHandler } from "./api/exception/exception.handler";
import { UserRoute } from "./route/user.route";

//Configuring application environments
const MainApp: Application = express();
const corsConfig = {
    origin: process.env.DOMAIN,
    optionsSuccessStatus: 200
}
MainApp.set("PORT", process.env.PORT);

//Configuring middlewares
MainApp.use(helmet());
MainApp.use(cors(corsConfig));
MainApp.use(bodyParser.json());
MainApp.use(bodyParser.urlencoded({ extended: true }));

//Not Allowed Methods Middleware
MainApp.use(new ExceptionHandler().notAllowedMethods);

//Adding API routes
MainApp.use('/country', new CountryRoute().routerPath);
MainApp.use('/commerce', new CommerceRoute().routerPath);
MainApp.use('/user', new UserRoute().routerPath);

//Page not found Middleware
MainApp.use(new ExceptionHandler().pageNotFound);

//General Exception Middleware
MainApp.use(new ExceptionHandler().generalException);

export default MainApp;