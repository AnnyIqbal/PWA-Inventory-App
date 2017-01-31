import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { cart } from '../cart';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input() productList: Product;
  @Input() store: boolean;
  @Output() wishedProduct: EventEmitter<Product>;

constructor (private route: Router) {
  this.wishedProduct = new EventEmitter();
}

 productWasSelected(product: Product): void {
   this.wishedProduct.emit(product);
   console.log('Product clicked: ', product);
   cart.push(product);
   console.log('now cart after pushing: ', cart);
   this.route.navigate(['wishlist']); // navigate to wishlist
 }

  // isSelected(product: Product): boolean {
  //   if (!product || !this.currentProduct) {
  //     return false;
  //   }
  //   return product.sku === this.currentProduct.sku;
  // }

}
