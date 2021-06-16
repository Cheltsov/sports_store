import { NgModule } from "@angular/core";
import { ProductRepository } from "./product/product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import {Order} from "./order/order.model";
import {OrderRepository} from "./order/order.repository";
import {RestDataSource} from "./rest.datasource";
// @ts-ignore
import { HttpModule } from "@angular/http";
import {AuthService} from "./auth.service";

@NgModule({
  imports: [HttpModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource }, RestDataSource, AuthService]
})

export class ModelModule { }
