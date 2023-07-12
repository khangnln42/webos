import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private repository: ProductRepository){

  }
  get products():Product[] {
    return this.repository.getProducts();
    // console.log('Products: ',this.products);
  }
  get category(): string[] {
    return this.repository.getCategories();
  } 
}  
