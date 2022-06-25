import { AuthService } from 'src/app/service/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cilAccountLogout, cilCart, cilUser} from '@coreui/icons';
import {IconModule, IconSetModule,IconSetService } from '@coreui/icons-angular';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText = '';
  user$ = this.auth.user$;

  @Output() searchTextEmitter = new EventEmitter<string>();

  search($event: string | undefined){
    this.searchTextEmitter.emit($event);
  }

  constructor(
    private auth:AuthService
  ) {}

  ngOnInit(): void {
  }

  onLogout() {
    this.auth.logout();
  }
}
