import { Entity } from './entity';
import { Product } from './product';
import { Status } from './status';
import { User } from './user';


export class Order extends Entity{
  customerID: number = 0;
  productID: number = 0;
  amount: number = 0;
  status: Status = Status.new;
  customer: User = new User();
  product: Product = new Product();

}
