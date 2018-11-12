import { Request, Response } from "express";

export class GenericController {
    constructor(private model: any) {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.detail = this.detail.bind(this);
    }

    async list(request: Request, response: Response) {
        const list = await this.model.find();
        response.json(list);
    }

    async save(request: Request, response: Response) {
        const params = request.body;

        await new this.model(params).save();
        response.send("Model created");
    }

    async update(request: Request, response: Response) {
        const ModelId = request.params._id;
        const params = request.body;

        await this.model.findOneAndUpdate({ _id: ModelId }, params);
        response.send("Model updated");
    }

    async delete(request: Request, response: Response) {
        const ModelId = request.params._id;

        await this.model.findOneAndRemove({ _id: ModelId });
        response.send("Model deleted");
    }

    async detail(request: Request, response: Response) {
        const ModelId = request.params._id;

        const modelData = await this.model.findOne({ _id: ModelId });
        response.json(modelData);
    }
}