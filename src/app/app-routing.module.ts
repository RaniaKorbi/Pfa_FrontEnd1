import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploiService } from 'src/services/emploi.service';
import { CvComponent } from './cv/cv.component';

import { EmploiComponent } from './emploi/emploi.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "", component:HomeComponent},{ path: "login", component:LoginComponent},{path: 'register', component: RegisterComponent},{ path: "emplois" , component:EmploiComponent},
  { path: "users", component:UserComponent}, { path: "cv", component:CvComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  


}
