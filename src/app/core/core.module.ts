import { NgModule } from '@angular/core';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ], imports: [
        SharedModule,
        AppRoutingModule
    ], exports: [
        AppRoutingModule,
        HeaderComponent
    ],providers:[
        ShoppingListService,
        RecipeService,
        AuthGuardService,
        AuthService,
        DataStorageService
    ]
})
export class CoreModule {

}