import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBar2Component } from './nav-bar-2/nav-bar-2.component';
import { HomeFirstPartComponent } from './home-first-part/home-first-part.component';
import { HomeSecondPartComponent } from './home-second-part/home-second-part.component';
import { HomeThirdPartComponent } from './home-third-part/home-third-part.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBar2Component,
    HomeFirstPartComponent,
    HomeSecondPartComponent,
    HomeThirdPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
