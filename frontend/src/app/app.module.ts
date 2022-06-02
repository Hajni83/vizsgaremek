import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from '@coreui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { GridModule, CarouselModule,CardModule, FooterModule,ImgModule,NavModule,HeaderModule, FormModule, ButtonModule} from '@coreui/angular';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
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
    HeaderModule
  ],
  providers: [ IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
