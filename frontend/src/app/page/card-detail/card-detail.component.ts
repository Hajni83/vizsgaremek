import { Product } from './../../model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../service/product.service';
import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  editor:User | null = this.auth.user$.value;
  product?: Product;

  constructor(
    private auth:AuthService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productService.getById(params['id']).subscribe((product)=>{
        this.product = product;
      });
    });

  }

}
