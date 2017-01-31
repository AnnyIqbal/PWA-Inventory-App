import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import {ProductDepartmentComponent} from './product-department/product-department.component';
import {ProductImageComponent} from './product-image/product-image.component';
import {ProductRowComponent} from './product-row/product-row.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {StoreComponent} from './store/store.component';

const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'store', component: StoreComponent },
  { path: 'wishlist', component: WishlistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductRowComponent,
    ProductsListComponent,
    WishlistComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
