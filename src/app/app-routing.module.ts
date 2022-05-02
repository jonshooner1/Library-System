import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { BooksComponent } from './books/books.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CheckincComponent } from './checkinc/checkinc.component';
import { CustomerconsoleComponent } from './customerconsole/customerconsole.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent,
  },
  {
    path: 'books',
    component: BooksComponent
  },
{
  path: 'location',
  component: LocationComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'customerconsole',
  component: CustomerconsoleComponent
},
{
  path: 'adminconsole',
  component: AdminconsoleComponent
},
{
  path: 'checkin',
  component: CheckInComponent
},
{
  path: 'checkout',
  component: CheckOutComponent
},
{
  path: 'checkinc',
  component: CheckincComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
