import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, ILoginData } from 'src/app/service/auth.service';
import { IconSetService } from '@coreui/icons-angular';
import { cilLockLocked, cilUser } from '@coreui/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: ILoginData = {};

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.auth.logout();
    }

    onLogin(): void {
      this.auth.login(this.loginData);
    }
}
