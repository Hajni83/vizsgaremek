import { Product } from './../../model/product';
import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent implements OnInit {

  searchText:string='';

  pageSize: number = 10;
  startSlice: number = 0;
  endSlice: number = 10;
  page: number = 1;
  products: Product[] = [];

  get pageCard(): number[] {
    const pageSize = Math.ceil(this.products.length / this.pageSize);
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

  constructor(
    private productService:ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((prods)=>{
      this.products = prods;
    })
  }

  jumpToPage(pageNum: number): void {
    this.page=pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }
}
