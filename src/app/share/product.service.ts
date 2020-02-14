import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:53805/api';
  private selectedProduct = new Subject<any>();
  productSelected = this.selectedProduct.asObservable();

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get(this.baseUrl + '/product');
  }

  selecetProduct(product){
    this.selectedProduct.next(product);
  }

  post(product){
    console.log('object')
    return this.http.post(this.baseUrl + '/product', product);
  }

  putproduct(product){
    return this.http.put(this.baseUrl + '/product/' + product.productId, product);
  }

  deleteProduct(id){
    return this.http.delete(this.baseUrl + '/product/' + id);
  }
}
