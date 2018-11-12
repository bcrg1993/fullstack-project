import { GenericController } from "./generic.controller";
import CountryModel from "../model/country.model";
import { Request, Response } from "express";

export class CountryController extends GenericController {

    constructor() {
        super(CountryModel);
    }

    async findByName(request: Request, response: Response) {
        const countryName = request.body.name;

        const list = await CountryModel
            .find({ "name": { $regex: '.*' + countryName + '.*' } })
            .sort({ name: 1 });
        response.json(list);
    }
}