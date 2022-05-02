import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { BooksComponent } from './books/books.component';
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
