import { Offer } from './offer';

export class Product {
    Id: string;
    Name: string;
    Price: number;
    Image: string;
    OfferId: number;
    Offer: Offer;
}