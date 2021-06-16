import {Injectable} from "@angular/core";
import {Cart} from "../cart.model";

@Injectable()
export class Order {
  public id: null;
  public name: null;
  public address: null;
  public city: null;
  public state: null;
  public zip: null;
  public country: null;
  public shipped: boolean = false;

  constructor(public cart: Cart) {
  }

  clear() {
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}
