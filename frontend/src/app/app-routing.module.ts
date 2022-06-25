import { CardDetailComponent } from './page/card-detail/card-detail.component';
import { CartComponent } from './page/cart/cart.component';
import { BoardgamesComponent } from './page/boardgames/boardgames.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'card-detail',
    component: CardDetailComponent,
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
