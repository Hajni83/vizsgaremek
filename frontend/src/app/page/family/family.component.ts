import { Component, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent implements OnInit {
  cards = Array.from({length: 40}, () => ([{
    imgUrl:"",
    name: "",
     price:''
   },
  {
    imgUrl:"",
    name: "",
    price:""
  }]));
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
