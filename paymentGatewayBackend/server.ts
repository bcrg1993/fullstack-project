//Importing dependencies
import _DOTENV = require("dotenv");
import _mongoose = require("mongoose");
import _http = require("http");

import MainApp from "./main";

//Configuring DOTENV
_DOTENV.config({ path: "./variables.env" })

//Configuring mongoose
_mongoose.Promise = global.Promise;
_mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
_mongoose.connection.on("connected", () => console.log("Connecting to MongoDB"));
_mongoose.connection.on("error", error => console.log(error));

//Configuring Http Server
const servidorHttp = _http.createServer(MainApp);
servidorHttp.listen(MainApp.get("PORT"), () => console.log(`Server running on port ${MainApp.get("PORT")}`));