import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {
    path:``,component:LoginComponent
  },
  {
    path:`adminlogin`,component:AdminloginComponent
  },
  {
    path:`register`,component:RegisterComponent
  },
  {
    path:`userslist`,component:UserslistComponent
  },
  
  {
    path:`adminhome`,component:AdminhomeComponent
  },
  {
    path:`userhome`,component:UserhomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
