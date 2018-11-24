import { Request, Response } from "express";
import { ResponseModel } from "../model/response.model";

export class GenericController {
    constructor(private model: any) {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.detail = this.detail.bind(this);
    }

    async list(request: Request, response: Response) {
        const list = await this.model.find().sort({ name: 1 });
        response.json(list);
    }

    async save(request: Request, response: Response) {
        const params = request.body;

        await new this.model(params).save();
        response.send(new ResponseModel().successResponse);
    }

    async update(request: Request, response: Response) {
        const modelId = request.params._id;
        const params = request.body;

        await this.model.findOneAndUpdate({ _id: modelId }, params);
        response.send(new ResponseModel().successResponse);
    }

    async delete(request: Request, response: Response) {
        const modelId = request.params._id;

        await this.model.findOneAndRemove({ _id: modelId });
        response.send(new ResponseModel().successResponse);
    }

    async detail(request: Request, response: Response) {
        const modelId = request.params._id;

        const modelData = await this.model.findOne({ _id: modelId });
        response.json(modelData);
    }
}