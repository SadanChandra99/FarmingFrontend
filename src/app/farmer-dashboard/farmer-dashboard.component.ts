import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-farmer-dashboard',
  templateUrl: './farmer-dashboard.component.html',
  styleUrls: ['./farmer-dashboard.component.css']
})
export class FarmerDashboardComponent implements OnInit {

  products: any[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getproducts();
  }

  getproducts(){
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    })
  }

}
