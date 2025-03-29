import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  @Input({required: true}) cart: Product[] = [];
  total = signal(0);
  toggleSideMenu() {
    this.hideSideMenu.update(prev => !prev);
  }

  ngOnChanges(changes: SimpleChanges){
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calculateTotal());
    }
  }
  calculateTotal(){
    return this.cart.reduce((t, p) =>
      t + p.price, 0
    )
  }
}
