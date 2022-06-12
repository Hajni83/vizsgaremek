import { AuthService } from 'src/app/service/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { cilAccountLogout} from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText = '';
  user: User | null = null
  @Output() searchTextEmitter = new EventEmitter<string>();

  search($event: string | undefined){
    this.searchTextEmitter.emit($event);
  }

  characters = [
    // 'Ant-Man',
    // 'Aquaman',
    // 'Asterix',
    // 'The Atom',
    // 'The Avengers',
    // 'Batgirl',
    // 'Batman',
    // 'Batwoman',
  ]

  constructor(
    public iconSet: IconSetService,
    private auth:AuthService
  ) {
    iconSet.icons = { cilAccountLogout};
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.auth.logout()
  }

}
