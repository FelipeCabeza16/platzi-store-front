import { Component, Input, SimpleChange } from '@angular/core';
import { ProductComponent } from "../../../products/components/product/product.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor() {
    // NO ASYNC
    // before render
    this.duration = 12;
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChange){
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit() {
    // after render
    // una vez
    // async; then; subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>' + this.duration);
    console.log('message =>' + this.message);
  }

  ngAfterViewInit() {
    // after render
    // hijos renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // con un ngIf
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
