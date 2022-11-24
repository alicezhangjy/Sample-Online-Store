import { Component, Input , Output, EventEmitter } from '@angular/core';
import {Product} from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

// this class handles functionality of the component
export class ProductAlertsComponent {

  @Input() product!: Product;

  //Output allows the compoent to emit an event when the value of notify changes
  @Output() notify = new EventEmitter();

}