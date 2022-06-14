import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

editor:User | null = this.auth.currentUserValue;
// todo az urlben át kell adni a product idját és azt a router paramon keresztül ki kell olvasni, majd azzal meg kell hívni a productservice get(id) metódusát, ez lesz maga a product property
//product=

  constructor(
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
  }

}
