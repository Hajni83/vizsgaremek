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
  products: Observable<Product[]> = this.productService.getAll();

 
  constructor(
    private payServiceService: PayServiceService,
    private productService:ProductService
    // private categoryService: CategoryService
  ) {

  }


  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/images/explorers1.jpg',
    };
    this.slides[1] = {
      src: '../assets/images/co2.jpg',
    }
    this.slides[2] = {
      src: '../assets/images/cafe1.jpg',
    }

     //FYI: itt iratkozok fel, nem async-el a view-ben mert több helyen is használjuk a products tömböt.
    //  this.productService.getAll().subscribe(products => {
    //   this.products = products;
    // });

    this.payServiceService.paySubjectObservable.subscribe(() => {
      alert("Sikeres fizetés!")
    })

  }
}
