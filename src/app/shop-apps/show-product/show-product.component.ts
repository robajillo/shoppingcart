import { Component, OnInit } from '@angular/core';
import {FetchProductService} from '../../services/fetch-product.service';
import {Product} from '../../modals/product';
import {CartProduct} from '../../modals/cartProduct';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  
  product:any;
  submitted = false
  category: any;
  constructor(private FetchProductService: FetchProductService) { }
  ngOnInit(): void {
    
  }
  saveProduct(): void {
    const data = {
      name: this.product.name,
      category: this.product.category,
      image: this.product.image,
      price: this.product.price 
    };
    this.FetchProductService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  fetchCategory(): void {
    this.FetchProductService.fetchCategory(this.category)
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: this.product.name,
      category: this.product.category,
      image: this.product.image,
      price: this.product.price 
    };
  }
}