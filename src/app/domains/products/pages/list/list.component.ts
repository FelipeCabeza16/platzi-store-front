import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProducts:Product[] = [
      {
        id: Date.now(),
        title: 'product 1',
        price: 5000,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 1,
        title: 'product 2',
        price: 3000,
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 2,
        title: 'product 3',
        price: 4500,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 3,
        title: 'product 4',
        price: 7000,
        image: 'https://picsum.photos/640/640?r=26',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 4,
        title: 'product 5',
        price: 2500,
        image: 'https://picsum.photos/640/640?r=27',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 5,
        title: 'product 6',
        price: 6000,
        image: 'https://picsum.photos/640/640?r=28',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'product 1',
        price: 5000,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 1,
        title: 'product 2',
        price: 3000,
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 2,
        title: 'product 3',
        price: 4500,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 3,
        title: 'product 4',
        price: 7000,
        image: 'https://picsum.photos/640/640?r=26',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 4,
        title: 'product 5',
        price: 2500,
        image: 'https://picsum.photos/640/640?r=27',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now() + 5,
        title: 'product 6',
        price: 6000,
        image: 'https://picsum.photos/640/640?r=28',
        creationAt: new Date().toISOString()
      },
    ];
    this.products.set(initProducts);
  }


  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

}
