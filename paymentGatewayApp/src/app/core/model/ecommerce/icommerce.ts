import { IAddress } from "./iaddress";
import { ICompany } from "./icompany";

export interface ICommerce {
    id: number;
    name: string;
    username: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany
}
