import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';
import { product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  dataProduct:product;

  constructor(public router:Router, public callapi:CallapiService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.getDataProductAll();
  }

  getDataProductAll(){
    this.callapi.getProductAll().subscribe(it =>{
      this.dataProduct = it;
      console.log(it);
    });
  }

  gotoAddProduct(){
    this.router.navigate(['/product-info',{status:"Add"}]);
  }

  gotoEditProduct(idProduct){
    this.router.navigate(['/product-info',{status:"Edit" , productId:idProduct}]);
  }

  gotoInfoProduct(idProduct){
    this.router.navigate(['/product-info',{status:"Info" , productid:idProduct}]);
  }

  deletedProduct(idProduct){
    this.callapi.deleteProductByid(idProduct).subscribe(it => {
      
    });
  }

}
