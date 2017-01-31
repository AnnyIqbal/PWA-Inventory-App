import { Component } from '@angular/core';
import { Product } from '../product';
import { cart } from '../cart';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  mycart: Product[] = cart;
}
