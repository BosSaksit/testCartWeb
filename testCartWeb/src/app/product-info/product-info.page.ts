import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {

  getStatus:string

  constructor(public actived:ActivatedRoute) { 
    this.getStatus = actived.snapshot.paramMap.get('status');
    console.log(this.getStatus);
    
  }

  ngOnInit() {
  }

}
