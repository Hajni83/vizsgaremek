import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartContent=Array.from([{name:"kártya", price:"5Ft",quantity:'1',sum:'4560Ft'}])
  constructor() { }

  ngOnInit(): void {
  }

}
