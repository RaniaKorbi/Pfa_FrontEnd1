import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emploi } from 'src/models/Emploi';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user= new User();
    erreur=0;
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onLoggedin(){
    this.authService.getUserFromDB(this.user.email).subscribe((usr:User)=>
    {
      if (usr.password==this.user.password){
        this.authService.SignIn(usr);
        this.router.navigate(['emplois']);
      }
      else
      this.erreur=1;
    },(err)=>console.log(err));
  }

}
