import { AuthGuardService } from './service/auth-guard.service';
import { CardDetailComponent } from './page/card-detail/card-detail.component';
import { CartComponent } from './page/cart/cart.component';
import { BoardgamesComponent } from './page/boardgames/boardgames.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'boardgames',
    component: BoardgamesComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'card-detail/:id',
    component: CardDetailComponent,
  },
  {
    path: 'users',
    canActivate: [AuthGuardService],
    component: UsersComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
