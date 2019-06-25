import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBar2Component } from './nav-bar-2/nav-bar-2.component';
import { HomeFirstPartComponent } from './home-first-part/home-first-part.component';
import { HomeSecondPartComponent } from './home-second-part/home-second-part.component';
import { HomeThirdPartComponent } from './home-third-part/home-third-part.component';
import { StarsComponent } from './stars/stars.component';
import { FirstFooterComponent } from './first-footer/first-footer.component';
import { SecondFooterComponent } from './second-footer/second-footer.component';
import { FooterImgComponent } from './first-footer/footer-img/footer-img.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBar2Component,
    HomeFirstPartComponent,
    HomeSecondPartComponent,
    HomeThirdPartComponent,
    StarsComponent,
    FirstFooterComponent,
    SecondFooterComponent,
    FooterImgComponent,
    AdminComponent,
    WelcomeComponent,
    MarketplaceComponent,
    ProductDetailComponent,
    EditProductComponent
  ],
  imports: [
   BrowserModule,
   FormsModule,
   HttpModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireDatabaseModule,
   routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
