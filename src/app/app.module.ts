import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmploiService } from 'src/services/emploi.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmploiComponent } from './emploi/emploi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule ,NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ListeCandidatureComponent } from './liste-candidature/liste-candidature.component';
import { UsersService } from 'src/services/user.service';
import { CvComponent } from './cv/cv.component';
import { CvService } from 'src/services/cv.service';




@NgModule({
  declarations: [
    AppComponent,
    EmploiComponent,
    
    UserComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    ListeCandidatureComponent,
    CvComponent,
  

  ],
  imports: [
    NgbModalModule ,BrowserModule,AppRoutingModule,HttpClientModule,RouterModule,FormsModule, RouterModule,CommonModule, BrowserAnimationsModule,ToastrModule.forRoot(),ReactiveFormsModule, NgbModule,
  ],
  providers: [EmploiService, UsersService, CvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
