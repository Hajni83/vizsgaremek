import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  cards = Array.from({length: 40}, () => ({body: Math.floor(Math.random() * 40)}));

  pageSize: number = 10;
  startSlice: number = 0;
  endSlice: number = 10;
  page: number = 1;

  get pageCard(): number[] {
    const pageSize = Math.ceil(this.cards.length / this.pageSize);
    return new Array(pageSize).fill(1).map((item, index) => index + 1);
  }
  constructor() { }

  ngOnInit(): void {
  }
  jumpToPage(pageNum: number): void {
    this.page=pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }

}
