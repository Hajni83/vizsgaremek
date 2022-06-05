import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent implements OnInit {
  cards = Array.from({length: 40}, () => ({name: "aaa"}));
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

  constructor() {}

  ngOnInit(): void {}

  jumpToPage(pageNum: number): void {
    this.page=pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }
}
