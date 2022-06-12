import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule, ToastModule, UtilitiesModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule, IconSetService, IconSetModule } from '@coreui/icons-angular';
import { GridModule, CarouselModule,CardModule,TooltipModule, FooterModule,ImgModule,NavModule,PaginationModule, HeaderModule, FormModule, ButtonModule} from '@coreui/angular';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { FamilyComponent } from './page/family/family.component';
import { StrategyComponent } from './page/strategy/strategy.component';
import { PartyComponent } from './page/party/party.component';
import { ActionComponent } from './page/action/action.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { CartComponent } from './page/cart/cart.component';
import { SearchPipe } from './pipe/search.pipe';
import { CardDetailComponent } from './page/card-detail/card-detail.component';
import { CardComponent } from './page/card/card.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { NavComponent } from './page/nav/nav.component';

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
    CartComponent,
    SearchPipe,
    CardDetailComponent,
    CardComponent,
    ForbiddenComponent,
    NavComponent
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
    PaginationModule,
    FormsModule,
    TooltipModule,
    UtilitiesModule,
    IconSetModule.forRoot()

  ],
  providers: [ IconSetService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}],

  bootstrap: [AppComponent]
})
export class AppModule { }
