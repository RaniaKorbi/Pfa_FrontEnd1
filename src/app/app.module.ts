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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    EmploiComponent,
    
    UserComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,RouterModule,FormsModule, RouterModule,CommonModule, BrowserAnimationsModule,ToastrModule.forRoot(),ReactiveFormsModule, NgbModule,
  ],
  providers: [EmploiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
