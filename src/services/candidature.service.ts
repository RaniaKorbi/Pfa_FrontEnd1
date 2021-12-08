import { Injectable } from '@angular/core';
import { Candidature } from 'src/models/Candidature';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Emploi} from 'src/models/Emploi';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getCandidaturesByEmploi(idEmploi: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiServerUrl}/candidature/findByEmploi/${idEmploi}`);
  }

  public addCandidature(candidature: Candidature, idEmploi: number): Observable<Candidature> {
    return this.http.post<Candidature>(`${this.apiServerUrl}/candidature/add/${idEmploi}`, candidature);
  }

  public updateCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>(`${this.apiServerUrl}/candidature/update/`, candidature);
  }

  public deleteCandidature(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/candidature/${id}`);
  }
}
