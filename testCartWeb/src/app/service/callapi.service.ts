import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host:string = "https://localhost:5001/api/"; 

  constructor(public http:HttpClient) { }

  public getProductAll(){
    return this.http.get<product>(CallapiService.host + "Products/GetAllProducts");
  }

  public getProductByid(idProduct:string){
    return this.http.get<product>(CallapiService.host + "Products/GetProduct/" + idProduct);
  }

  public deleteProductByid(idProduct){
    return this.http.delete<product>(CallapiService.host + "Products/DeleteProduct/" + idProduct);
  }
}
