import { Injectable } from '@angular/core';
import { Emploi } from 'src/models/Emploi';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getEmplois(): Observable<Emploi[]> {
    return this.http.get<Emploi[]>(`${this.apiServerUrl}/emploi/all`);
  }

  public addEmploi(emploi: Emploi): Observable<Emploi> {
    return this.http.post<Emploi>(`${this.apiServerUrl}/emploi/add`, emploi);
  }

  public updateEmploi(emploi: Emploi):Observable<Emploi>{      
    return this.http.put<Emploi>(this.apiServerUrl+"/emploi/update", emploi);
}

  public deleteEmploi(idEmploi: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/emploi/${idEmploi}`)
}
}