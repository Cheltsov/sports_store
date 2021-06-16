import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StoreModule} from "./store/store.module";
import {RouterModule} from "@angular/router";
import {StoreComponent} from "./store/store.component";
import {CartDetailComponent} from "./store/cartDetail/cartDetail.component";
import {CheckoutComponent} from "./store/checkout/checkout.component";
import {StoreFirstGuard} from "./storeFirst.guard";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      {
        path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "admin",
        loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule),
        canActivate: [StoreFirstGuard]
      },
      {path: "**", redirectTo: "/store"},
    ])],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
