import { Entity } from "./entity";

export class Address extends Entity {
    country: string = '';
    city: string = '';
    street: string = '';
    notes: string = '';
}
