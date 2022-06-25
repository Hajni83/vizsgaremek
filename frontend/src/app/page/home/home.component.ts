import { ChangeDetectorRef, Component,ElementRef,OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { Category } from '../../model/category';
import { PayServiceService } from '../pay-service.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'vizsgaremek';
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  products: Product[] = [];
  pageSize: number = 3;
  startSlice: number = 0;
  endSlice: number = 3;
  page: number = 1;

  constructor(
    private payServiceService: PayServiceService,
    private productService:ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((result)=>{
      this.products = result;
    })


    this.slides[0] = {
      src: '../assets/images/explorers1.jpg',
    };
    this.slides[1] = {
      src: '../assets/images/co2.jpg',
    }
    this.slides[2] = {
      src: '../assets/images/cafe1.jpg',
    }

    this.payServiceService.paySubjectObservable.subscribe(() => {
      alert("Sikeres fizetés!")
    })
  }

  get pageCard(): number[] {
    const pageSize = Math.ceil(this.products.length / this.pageSize);
    return new Array(pageSize).fill(1).map((item, index) => index + 1);
  }

  jumpToPage(pageNum: number): void {
    this.page = pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }
}
