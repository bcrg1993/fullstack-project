import { GenericController } from "./generic.controller";
import CommerceModel from "../model/commerce.model";
import { Request, Response } from "express";

export class CommerceController extends GenericController {

    constructor() {
        super(CommerceModel);
    }

    async list(request: Request, response: Response) {
        const list = await CommerceModel.find()
            .sort({ name: 1 })
            .select({ name: 1, businessName: 1, phone: 1, address: 1 });
        response.json(list);
    }

    async detail(request: Request, response: Response) {
        const modelId = request.params._id;

        const modelData = await CommerceModel.findOne({ _id: modelId }).populate('country');
        response.json(modelData);
    }
}