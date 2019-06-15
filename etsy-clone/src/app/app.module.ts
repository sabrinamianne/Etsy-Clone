import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBar2Component } from './nav-bar-2/nav-bar-2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBar2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
