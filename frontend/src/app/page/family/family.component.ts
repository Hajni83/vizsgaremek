import { Product } from './../../model/product';
import { Component, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent implements OnInit {
  cards:Product[] = [{
    id:0,
    image:"./assets/images/cafe1.jpg",
    name: "Café",
    description: "Café társasjáték nagycsaládosoknak.",
    price:1
   },
  {
    id:1,
    image:"./assets/images/co2.jpg",
    name: "CO2",
    description: "CO2 társasjáték környezettudatos családoknak.",
    price:2
  }];
  searchText:string='';

  pageSize: number = 10;
  startSlice: number = 0;
  endSlice: number = 10;
  page: number = 1;

  get pageCard(): number[] {
    const pageSize = Math.ceil(this.cards.length / this.pageSize);
    return new Array(pageSize).fill(1).map((item, index) => index + 1);
  }

  onSearch(searchText:string){
    this.searchText=searchText
  }

  colors = [
    { color: 'secondary', textColor: 'secondary' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'light' },
    { color: 'dark' }
  ];

  constructor() {}

  ngOnInit(): void {

  }

  jumpToPage(pageNum: number): void {
    this.page=pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }
}
