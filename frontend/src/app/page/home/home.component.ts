import { Toast } from 'bootstrap';

import { ChangeDetectorRef, Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { cilCart,cilSearch,cilUser,cilPhone,cilEnvelopeClosed } from '@coreui/icons';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { Category } from '../../model/category';
import { PayServiceService } from '../pay-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'vizsgaremek';
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  products!: Product[];
  
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

  // categories: Observable<Category[]>  = this.categoryService.getAll();
  constructor(
    public iconSet: IconSetService,
    private payServiceService: PayServiceService
    // private productService:ProductService,
    // private categoryService: CategoryService
  ) {
    iconSet.icons = { cilCart, cilSearch,cilUser,cilPhone,cilEnvelopeClosed};
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
