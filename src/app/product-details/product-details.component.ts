import { Component, OnInit } from '@angular/core';
import {products} from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
 
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }
  
    addToCart(product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
  ngOnInit(): void {
    console.log(this.route.paramMap);
    this.route.paramMap.subscribe(params=>{
      this.product=products[+params.get('productId')];
      }
    );
  }

}
