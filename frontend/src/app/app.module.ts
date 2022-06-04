import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from '@coreui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { GridModule, CarouselModule,CardModule, FooterModule,ImgModule,NavModule,PaginationModule, HeaderModule, FormModule, ButtonModule} from '@coreui/angular';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { FamilyComponent } from './page/family/family.component';
import { StrategyComponent } from './page/strategy/strategy.component';
import { PartyComponent } from './page/party/party.component';
import { ActionComponent } from './page/action/action.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { CartComponent } from './page/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FamilyComponent,
    StrategyComponent,
    PartyComponent,
    ActionComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertModule,
    NavModule,
    IconModule,
    GridModule,
    CarouselModule,
    HttpClientModule,
    CardModule,
    FooterModule,
    ImgModule,
    FormModule,
    ButtonModule,
    HeaderModule,
    PaginationModule 
  ],
  providers: [ IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
