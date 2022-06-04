import { CartComponent } from './page/cart/cart.component';
import { ActionComponent } from './page/action/action.component';
import { PartyComponent } from './page/party/party.component';
import { StrategyComponent } from './page/strategy/strategy.component';
import { FamilyComponent } from './page/family/family.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'family',
    component:FamilyComponent
  },
  {
    path:'strategy',
    component:StrategyComponent
  },
  {
    path:'party',
    component:PartyComponent
  },
  {
    path:'action',
    component:ActionComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
