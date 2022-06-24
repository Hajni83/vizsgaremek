import { Category } from './category';
import { Entity } from './entity';
export class Product extends Entity{
  [key: string]: any;
  name: string = '';
  description: string = '';
  datasheet:string='';
  image: string = '';
  price: number = 0;
  category?: Category = new Category();
}
