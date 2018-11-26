import { CountryController } from "../api/controller/country.controller";
import express = require("express");
import { ExceptionHandler } from "../api/exception/exception.handler";

export class CountryRoute {

    countryController: CountryController;
    router: express.Router;
    exceptionHandler: ExceptionHandler;

    constructor() {
        this.countryController = new CountryController();
        this.exceptionHandler = new ExceptionHandler();
        this.router = express.Router();
    }

    get routerPath() {
        this.router.get('/', this.exceptionHandler.internalError(this.countryController.list));
        this.router.post('/', this.exceptionHandler.internalError(this.countryController.save));
        this.router.post('/findByName', this.exceptionHandler.internalError(this.countryController.findByName));
        this.router.put('/:_id', this.exceptionHandler.internalError(this.countryController.update));
        this.router.delete('/:_id', this.exceptionHandler.internalError(this.countryController.delete));
        this.router.get('/:_id', this.exceptionHandler.internalError(this.countryController.detail));

        return this.router;
    }
}