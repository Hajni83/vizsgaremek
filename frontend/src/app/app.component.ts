import { Component,OnInit } from '@angular/core';
import { cilAccountLogout, cilCart, cilUser, cilLockLocked, cilEnvelopeClosed, cilPhone, cibFacebook, cilPencil } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = {cilPencil,cilAccountLogout,cilUser, cilCart, cilLockLocked,cilEnvelopeClosed, cilPhone, cibFacebook};
  }
}



