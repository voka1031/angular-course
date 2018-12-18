import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list.component';

const shoppingListRoutes: Routes = [
    { path: '', component: ShoppingListComponent, canActivate: [AuthGuardService] },
]

@NgModule({
    imports: [RouterModule.forChild(shoppingListRoutes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}