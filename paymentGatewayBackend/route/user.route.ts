import express = require("express");
import { ExceptionHandler } from "../api/exception/exception.handler";
import { UserController } from "../api/controller/user.controller";

export class UserRoute {

    userController: UserController;
    router: express.Router;
    exceptionHandler: ExceptionHandler;

    constructor() {
        this.userController = new UserController();
        this.exceptionHandler = new ExceptionHandler();
        this.router = express.Router();
    }

    get routerPath() {
        this.router.get('/', this.exceptionHandler.internalError(this.userController.list));
        this.router.post('/', this.exceptionHandler.internalError(this.userController.save));
        this.router.put('/:_id', this.exceptionHandler.internalError(this.userController.update));
        this.router.delete('/:_id', this.exceptionHandler.internalError(this.userController.delete));
        this.router.post('/validate', this.exceptionHandler.internalError(this.userController.validate));

        return this.router;
    }
}