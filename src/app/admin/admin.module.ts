import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {AdminComponent} from "./admin.component";
import {AuthGuard} from "./auth/auth.guard";
import {ProductEditorComponent} from "./product/productEditor.component";
import {ProductTableComponent} from "./product/productTable.component";
import {OrderTableComponent} from "./order/orderTable.component";

let routing = RouterModule.forChild([
  {path: "auth", component: AuthComponent},
  {
    path: "main", component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: "products/:mode/:id", component: ProductEditorComponent },
      { path: "products/:mode", component: ProductEditorComponent },
      { path: "products", component: ProductTableComponent },
      { path: "orders", component: OrderTableComponent },
      { path: "**", redirectTo: "products" }
    ]
  },
  {path: "**", redirectTo: "auth"}
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent],
  providers: [AuthGuard],
})
export class AdminModule {
}
