import { switchMap } from 'rxjs/operators';
import { Product } from '../../model/product';
import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.scss'],
})
export class BoardgamesComponent implements OnInit {
  searchText: string = '';

  pageSize: number = 9;
  startSlice: number = 0;
  endSlice: number = 9;
  page: number = 1;
  products: Product[] = [];
  categoryTitle: string = '';

  get pageCard(): number[] {
    const pageSize = Math.ceil(this.products.length / this.pageSize);
    return new Array(pageSize).fill(1).map((item, index) => index + 1);
  }

  onSearch(searchText: string) {
    this.searchText = searchText;
  }

  colors = [
    { color: 'secondary', textColor: 'secondary' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'light' },
    { color: 'dark' },
  ];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.categoryTitle = params['category'];
      this.productService
        .getProductsByCategory(params['category'])
        .subscribe((prods) => {
          this.products = prods;
          this.jumpToPage(1);
        });
    });
  }

  jumpToPage(pageNum: number): void {
    this.page = pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }
}
