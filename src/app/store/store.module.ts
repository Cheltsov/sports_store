import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module";
import {StoreComponent} from "./store.component";
import {CounterDirective} from "./counter.directive";
import {CheckoutComponent} from "./checkout/checkout.component";
import {RouterModule} from "@angular/router";
import {CartDetailComponent} from "./cartDetail/cartDetail.component";
import {CartSummaryComponent} from "./cartSummary/cartSummary.component";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, CounterDirective, CheckoutComponent, CartDetailComponent, CartSummaryComponent],
  exports: [StoreComponent, CheckoutComponent, CartDetailComponent]
})
export class StoreModule { }
