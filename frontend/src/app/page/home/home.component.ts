
import { Component,OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { cilCart,cilSearch,cilUser,cilPhone,cilEnvelopeClosed } from '@coreui/icons';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { Category } from '../../model/category';
// import { CategoryService } from '../../service/category.service';
// import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'vizsgaremek';
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  products!: Product[];
  cards = new Array(4).fill({name: ''});

  // categories: Observable<Category[]>  = this.categoryService.getAll();
  constructor(
    public iconSet: IconSetService,
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
    this.cards[0] = { name: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
    this.cards[1] = { name: 'This card has supporting text below as a natural lead-in to additional content.'}
    this.cards[2] = { name: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'}
    this.cards[3] = { name: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
    this.cards[4] = { name: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'}
    this.cards[5] = { name: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  }
}
