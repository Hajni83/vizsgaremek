import { AddressService } from './../../service/address.service';
import { OrderService } from './../../service/order.service';
import { PayServiceService } from './../pay-service.service';
import { Component, OnInit, EventEmitter, Output, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';
import { Order } from 'src/app/model/order';
import { Address } from 'src/app/model/address';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterContentChecked {

  address: Address = new Address();
  order: Order = new Order();
  total:number = 0;

  constructor(
    private router:Router,
    private payServiceService: PayServiceService,
    private orderService:OrderService,
    private cartService:CartService,
    private addressService: AddressService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.order.products = this.cartService.products;
    this.total = this.order.products.reduce((acc, obj) => {
      return acc + obj.price;
    }, 0)
  }

  onClickPay() {
    this.addressService.create(this.address).subscribe(address=>{
      this.order.addressId = address._id;
      this.orderService.create(this.order).subscribe(order=>{
        this.cartService.products = [];
        this.router.navigate([`/`]).then(()=>{
          this.payServiceService.buttonClicked();
        });
      });
    })

  }
}
