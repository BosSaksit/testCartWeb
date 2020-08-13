import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { ActivatedRoute } from '@angular/router';
import { cart } from '../models/cart';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.page.html',
  styleUrls: ['./cart-detail.page.scss'],
})
export class CartDetailPage implements OnInit {

  getCartId:string;
  dataCart:cart;

  constructor(public callapi:CallapiService , public actived:ActivatedRoute) { 
    this.getCartId = this.actived.snapshot.paramMap.get('idCart');
    console.log(this.getCartId);
    if (this.getCartId != null) {
      this.getCartDataByid();
    }
    
  }

  ngOnInit() {
  }

  ionViewWiilEnter(){
    
  }

  getCartDataByid(){
    this.callapi.getCartDataByid(this.getCartId).subscribe(it =>{
      this.dataCart = it;
      console.log(this.dataCart);
      
    });
  }

}
