import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { cart } from '../models/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  dataCart: cart

  constructor(public callapi: CallapiService, public router: Router) { }

  ngOnInit() {
    this.getDataCartAll();
  }

  getDataCartAll() {
    this.callapi.getCartAll().subscribe(it => {
      this.dataCart = it;
      console.log(this.dataCart);

    });
  }

  gotoAddCart() {
    this.router.navigate(['/cart-add']);
  }

  gotoCartDetail(cartId) {
    this.router.navigate(['/cart-detail', { idCart: cartId }]);
  }



}
