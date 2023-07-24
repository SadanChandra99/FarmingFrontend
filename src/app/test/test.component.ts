import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  products: any[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getproducts();
  }
getproducts(){
  this.productService.getProducts().subscribe((data: any)=>{
    this.products = data;
  })
}
}
