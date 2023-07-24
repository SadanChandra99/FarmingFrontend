import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
