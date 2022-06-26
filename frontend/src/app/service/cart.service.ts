import { ProductService } from 'src/app/service/product.service';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] =[];

  constructor(private productService:ProductService) { }

  addToCart(productId?: string) {
    this.productService.getById(productId).subscribe(product=>{
      this.products.push(product);
    });
  }
}
