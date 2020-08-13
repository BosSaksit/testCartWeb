import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { Router } from '@angular/router';
import { product } from '../models/product';
import { cart } from '../models/cart';
import { AlertController } from '@ionic/angular';
import { newArray } from '@angular/compiler/src/util';
import { productList } from '../models/productList';

@Component({
  selector: 'app-cart-add',
  templateUrl: './cart-add.page.html',
  styleUrls: ['./cart-add.page.scss'],
})
export class CartAddPage implements OnInit {

  dataProduct: product
  dataProductList = new Array<productList>();
  data2 = new cart();

  btnStatus: boolean = false;
  sumPriceProduct: number = 0;

  // data2 = {
  //   "productList": null,
  //   "cartId": null,
  //   "cartTotal": null
  // }

  constructor(public callapi: CallapiService, public router: Router, public alertController: AlertController) {
    this.data2.productList = new Array<productList>();
  }

  ngOnInit() {
    this.getDataProduct();
  }


  async presentAlertAddCart() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'AddDataCart ?',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.callapi.addCart(this.data2).subscribe(it => {
            });
          }
        }
      ]
    });

    await alert.present();
  }

  calculateCartTotal() {
    this.btnStatus = true;
    console.log(this.data2.productList.length);
    this.data2.cartTotal = 0;
    for (let index = 0; index < this.data2.productList.length; index++) {
      this.data2.cartTotal += this.data2.productList[index].product.productPrice * this.data2.productList[index].productQuantity
    }
  }


  getDataProduct() {
    this.callapi.getProductAll().subscribe(it => {
      this.dataProduct = it
      console.log(it);
    });
  }

  // addProductList(productList) {
  //   this.dataProductList.push(productList);
  //   console.log(this.dataProductList);
  //   this.data2.productList = this.dataProductList;
  //   console.log(this.data2.productList[0]);

  //   console.log(this.data2);

  // }

  async presentAlertInputCountProduct(product) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Input Product Count',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (name) => {
            // console.log('Confirm Ok');

            // data.product = product;
            // // data.product.push(product);
            // data.productQuantity = name.name1;
            // console.log(data);
            var productItem = new productList();
            productItem.product = product;
            productItem.productQuantity = Number(name.name1);

            this.data2.productList.push(productItem)
            console.log(this.data2);

            // this.addProductList(data);
          }
        }
      ]
    });

    await alert.present();
  }



}
