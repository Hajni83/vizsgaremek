import { Entity } from "./entity";

export class User extends Entity {
  [key: string]: any;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  role?: number;
  token?: string;
}
