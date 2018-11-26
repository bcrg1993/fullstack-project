import { GenericController } from "./generic.controller";
import { Request, Response } from 'express';
import UserModel from "../model/user.model";
import { ResponseModel } from "../model/response.model";

export class UserController extends GenericController {

    constructor() {
        super(UserModel);
    }

    async validate(request: Request, response: Response) {
        const params = request.body;

        const modelData = await UserModel.findOne({ username: params.username, password: params.password });
        if (modelData) {
            const userData = await UserModel.findOne({ username: params.username })
                .select({ name: 1, lastName: 1, username: 1 });
            response.json(userData);
        } else {
            response.json(new ResponseModel().unauthorizeResponse);
        }
    }


}