import { Component, Input, SimpleChanges } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges){
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
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

  doSomething() {
    console.log('change duration');
  }
}
