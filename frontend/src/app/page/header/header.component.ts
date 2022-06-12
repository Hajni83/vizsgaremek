import { AuthService } from 'src/app/service/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cilAccountLogout, cilCart, cilUser} from '@coreui/icons';
import {IconModule, IconSetModule,IconSetService } from '@coreui/icons-angular';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [IconSetService]
})
export class HeaderComponent implements OnInit {

  searchText = '';
  user: User | null = null;
  loginStatus = false;
  userSub!:Subscription;

  @Output() searchTextEmitter = new EventEmitter<string>();

  search($event: string | undefined){
    this.searchTextEmitter.emit($event);
  }



  constructor(
    public iconSet: IconSetService,
    private auth:AuthService
  ) {
    iconSet.icons = {cilAccountLogout,cilUser, cilCart};
  }

  ngOnInit(): void {
    this.userSub = this.auth.currentUserSubject.subscribe(
      user => this.user = user
    )
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.auth.logout()
  }

}
