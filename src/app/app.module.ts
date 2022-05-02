import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import { CustomerconsoleComponent } from './customerconsole/customerconsole.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    FrontpageComponent,
    TopnavComponent,
    LocationComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    CustomerconsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
