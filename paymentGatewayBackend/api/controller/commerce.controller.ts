import { GenericController } from "./generic.controller";
import CommerceModel from "../model/commerce.model";

export class CommerceController extends GenericController {

    constructor() {
        super(CommerceModel);
    }
}