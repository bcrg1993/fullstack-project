import { CommerceController } from "../api/controller/commerce.controller";
import express = require("express");

export class CommerceRoute {

    commerceController: CommerceController;
    router: express.Router;

    constructor() {
        this.commerceController = new CommerceController();
        this.router = express.Router();
    }

    get routerPath() {
        this.router.get('/', this.commerceController.list);
        this.router.post('/', this.commerceController.save);
        this.router.put('/:_id', this.commerceController.update);
        this.router.delete('/:_id', this.commerceController.delete);
        this.router.get('/:_id', this.commerceController.detail);

        return this.router;
    }
}