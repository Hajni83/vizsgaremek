import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { IconSetService } from '@coreui/icons-angular';
import { cilLockLocked, cilUser } from '@coreui/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  user: User = new User();
  serverError = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    public iconSet: IconSetService
    ) {
      iconSet.icons = {cilUser, cilLockLocked};
    }

  ngOnInit(): void {}

  onLogin(ngForm: NgForm): void {
    this.auth
      .login(ngForm.value)
      .toPromise()
      .then(
        (userResponse) => {
          if (this.auth.currentUserValue) {
            this.router.navigate(['/']);
          }
        },
        (err) => {
          this.serverError = err.error;
          const to = setTimeout(() => {
            clearTimeout(to);
            this.serverError = '';
          }, 3000);
        }
      );
  }
}
