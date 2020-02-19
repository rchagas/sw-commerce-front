import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppMaterialModule } from './app-material/app-material.module';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListProductModule } from './list-product/list-product.module';
import { ContentModule } from './content/content.module';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ListProductModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ContentModule,
  ],
  exports:[
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
