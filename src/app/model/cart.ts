import { Product } from './product';

export class Cart{
    products: Product[];
    amount: number;
    totalWithoutDiscount: number;
}