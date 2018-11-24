import { IRepresentative } from "./representative";
import { ICountry } from "../country/icountry";

export interface ICommerce {
    _id: number;
    name: string;
    businessName: string;
    address: string;
    phone: string;
    representative: IRepresentative;
    country: ICountry;
}
