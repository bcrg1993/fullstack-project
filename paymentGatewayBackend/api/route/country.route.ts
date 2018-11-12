import { CountryController } from "../controller/country.controller";
import express = require("express");

export class CountryRoute {

    countryController: CountryController;
    router: express.Router;

    constructor() {
        this.countryController = new CountryController();
        this.router = express.Router();
    }

    get routerPath() {
        this.router.get('/', this.countryController.list);
        this.router.post('/', this.countryController.save);
        this.router.post('/findByName', this.countryController.findByName);
        this.router.put('/:_id', this.countryController.update);
        this.router.delete('/:_id', this.countryController.delete);
        this.router.get('/:_id', this.countryController.detail);

        return this.router;
    }
}