import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from '@coreui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { GridModule, CarouselModule,CardModule, FooterModule   } from '@coreui/angular';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
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
  ],
  providers: [ IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
