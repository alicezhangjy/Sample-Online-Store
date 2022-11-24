import { Component, OnInit } from '@angular/core';
//Activated Route is specific to each component that the angular router loads, contains info on the route and the route's params
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    //First get the product ID from the current route; use route.snapshot to access the route params
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Find the product that correspond with the id provided in route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
