import { Product } from './../../model/product';


import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card!: Product;

  @Input()
  i!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
