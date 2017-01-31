import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

product: Product[];

constructor() {
  this.product = [
    new Product(
    'NICEHAT', // sku
    'A Nice Black Hat', // name
    'assets/Images/black-hat.jpg', // img url
    ['Men', 'Accessories', 'Hats'], // dept
    56), // price
    new Product(
      'NEATOJACKET',
      'Blue Jacket',
      'assets/Images/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99),
    new Product(
      'MYSHOES',
      'Black Running Shoes',
      'assets/Images/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99)
  ];
}
}
