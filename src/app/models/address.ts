export interface IAddress {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: IGeo;
}

export interface IGeo {
    lat: string;
    lng: string;
}
