import { Product } from './../../model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../service/product.service';
import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Location } from '@angular/common';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  editor:User | null = this.auth.user$.value;

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap(params => this.productService.getById(params['id'])),
  );

  constructor(
    private auth:AuthService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  update(product: Product): void {
    // if (this.uploadedFilePath) {
    //   product.image = this.uploadedFilePath;
    // }

    // if (this.selectedCategory) {
    //   product.category = this.selectedCategory?._id;
    // } else if (typeof product.category !== 'string') {
    //   product.category = product.category?._id;
    // }

    this.productService.update(product).subscribe({
      next: updatedProduct => this.location.back(),
      error: err => console.error(err),
    });
  }
}
