import { PayServiceService } from './../pay-service.service';
import { Component, OnInit, EventEmitter, Output, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterContentChecked {

  cartContent: Product[] = this.cartService.products;
  total:number = 0;

  constructor(private router:Router,
    private payServiceService: PayServiceService,
    private cartService:CartService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.total = this.cartContent.reduce((acc, obj) => {
      return acc + obj.price;
    }, 0)
  }

  onClickPay() {
    // todo itt kellene az order.router.js-en keresztül menteni az order-t
    this.router.navigate([`/`]).then(()=>{
      this.payServiceService.buttonClicked();
    });
  }
}
