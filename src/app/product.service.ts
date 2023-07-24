import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
 
  getProducts() {
    const token = localStorage.getItem('token');
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
   return this.http.get(`http://localhost:9002/farmer/getAllProductByFarmer?farmerId=5`, {headers: header});
  }

  addProduct(product: Product){
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization": "Bearer "+ token});
    return this.http.post(`http://localhost:9002/farmer/addproduct?farmerId=5`, product, {headers: header});
  }
}
