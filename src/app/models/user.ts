import { ICompany } from './company';
import { IAddress } from '.';

export interface IUser {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website: string;
    company: ICompany;
    address: IAddress;
}
