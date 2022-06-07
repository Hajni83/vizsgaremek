import { PayServiceService } from './../pay-service.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  cartContent=Array.from([{name:"kártya", price:"5Ft",quantity:'1',sum:'4560Ft'}])

  constructor(private router:Router, private payServiceService: PayServiceService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate([`/`]).then(()=>{
      this.payServiceService.buttonClicked();
    });
  }
}
