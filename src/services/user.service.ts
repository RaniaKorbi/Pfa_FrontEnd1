import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


import { User } from "../models/user";


@Injectable({providedIn :"root"})
export class UsersService{

  private apiBaseUrl=environment.apiBaseUrl;
  suser = false;
  choixmenu : string  = 'A';
  public dataForm:  FormGroup; 
    constructor(private http: HttpClient){
     
    }
    createData(user:User): Observable<Object> {
      return this.http.post(`${this.apiBaseUrl}/user/add`, user);
    }
    
    updatedata(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.apiBaseUrl}/${id}`, value);
    }
    public getAllUsers():Observable<User[]>{
        
        return this.http.get<User[]>(this.apiBaseUrl+"/user/all");
    }  
     public getUser(email:string):Observable<User>{
        
        return this.http.get<User>(`${this.apiBaseUrl}/user/find/${email}`);
    }
  /*  //concernant le profile
      public getUser_analyses(email:string):Observable<Rdv[]>{
        
        return this.http.get<Rdv[]>(`${this.apiBaseUrl}/rdv/find/all/${email}`);
    }*/
    

    public addUser(user: User):Observable<User>{
        
        return this.http.post<User>(this.apiBaseUrl+"/user/add", user);
    }
    public updateUser(user: User):Observable<User>{
        
      return this.http.post<User>(this.apiBaseUrl+"/user/update", user);
  }
    //public deleteUser(email: String):Observable<void>{
        
       // return this.http.delete<void>(this.apiBaseUrl+"/user/delete/"+email);
   // }
       
  public deleteUser(email: String): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/user/delete/${email}`);
  }
  }