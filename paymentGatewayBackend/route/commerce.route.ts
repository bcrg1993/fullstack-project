import { CommerceController } from "../api/controller/commerce.controller";
import { ExceptionHandler } from "../api/exception/exception.handler";
import express = require("express");

export class CommerceRoute {

    commerceController: CommerceController;
    router: express.Router;
    exceptionHandler: ExceptionHandler;

    constructor() {
        this.commerceController = new CommerceController();
        this.exceptionHandler = new ExceptionHandler();
        this.router = express.Router();
    }

    get routerPath() {
        this.router.get('/', this.exceptionHandler.internalError(this.commerceController.list));
        this.router.post('/', this.exceptionHandler.internalError(this.commerceController.save));
        this.router.put('/:_id', this.exceptionHandler.internalError(this.commerceController.update));
        this.router.delete('/:_id', this.exceptionHandler.internalError(this.commerceController.delete));
        this.router.get('/:_id', this.exceptionHandler.internalError(this.commerceController.detail));

        return this.router;
    }
}