import { AuthService } from 'src/app/service/auth.service';
import { Product } from './../../model/product';


import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

 editor:User | null = this.auth.currentUserValue;

  @Input()
  card!: Product;

  @Input()
  i!: number;

  constructor(
    private auth:AuthService
  ) {
  }

  ngOnInit(): void {
  }

}
