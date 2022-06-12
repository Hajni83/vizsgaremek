import { IconSetService } from '@coreui/icons-angular';
import { Component, OnInit } from '@angular/core';
import { cibFacebook, cilEnvelopeClosed, cilPhone } from '@coreui/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilEnvelopeClosed, cilPhone, cibFacebook};
  }

  ngOnInit(): void {
  }

}
