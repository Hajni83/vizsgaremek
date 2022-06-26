import { Address } from './address';
import { Entity } from './entity';
import { Product } from './product';

export class Order extends Entity{
  addressId?: string = '';
  products: Product[] = [];
}
