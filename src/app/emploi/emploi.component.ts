import { Component, OnInit } from '@angular/core';
import { Emploi } from 'src/models/Emploi';
import { EmploiService } from 'src/services/emploi.service';
import { Candidature } from 'src/models/Candidature';
import { CandidatureService } from 'src/services/candidature.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent implements OnInit {

  public emplois: Emploi[];
  public editEmploi: Emploi;
  public deleteEmploi: Emploi;
  public candidature:Candidature;
  public emploi:Emploi;
  public idEmploi: number;
  public candidatures: Candidature[];
  public addCandidature: Candidature;
  closeResult: string;

  
  constructor(private emploiService: EmploiService,
    private candidatureService: CandidatureService, 
    private router: Router ,
    private authService : AuthService ,
    private modalService: NgbModal) {}
  ngOnInit(){
    this.getEmplois();
  }
  public getEmplois(): void {
    this.emploiService.getEmplois().subscribe(
      (response: Emploi[]) => {
        this.emplois = response;
        // console.log(this.emplois);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getCandidaturesByEmploi(idEmploi:number): void {
    this.candidatureService. getCandidaturesByEmploi(idEmploi).subscribe(
      (response: Candidature[]) => {
        this.candidatures = response;
        // console.log(this.candidatures);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmploi(addForm: NgForm): void {
    document.getElementById('add-emploi-form').click();
    this.emploiService.addEmploi(addForm.value).subscribe(
      (response: Emploi) => {
        // console.log(response);
        this.getEmplois();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onAddCandidature(addForm: NgForm): void {
    document.getElementById('add-candidature-form').click();
    // console.log(addForm.value);
    this.candidatureService.addCandidature(addForm.value,this.idEmploi).subscribe(
      (response: Candidature) => {
        // console.log(response);
        
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmploi(emploi: Emploi):void {
    // console.log(emploi);
    this.emploiService.updateEmploi(emploi).subscribe(
      (response: Emploi) => {
        // console.log(response);
        this.getEmplois();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }
  public onDeleteEmploi(idEmploi: number): void {
    this.emploiService.deleteEmploi(idEmploi).subscribe(
      (response: void) => {
        // console.log(response);
        this.getEmplois();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 
  public searchEmplois(key: string): void {
    // console.log(key);
    const results: Emploi[] = [];
    for (const emploi of this.emplois) {
      if (emploi.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || emploi.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || emploi.salaire.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || emploi.experience.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || emploi.adresse.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || emploi.societe.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(emploi);
      }
    }
    this.emplois = results;
    if (results.length === 0 || !key) {
      this.getEmplois();
    }
  }

  public onOpenModal(emploi: Emploi, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmploiModal');
    }
    if (mode === 'edit') {
      this.editEmploi = emploi;
      button.setAttribute('data-target', '#updateEmploiModal');
    }
    if (mode === 'delete') {
      this.deleteEmploi = emploi;
      button.setAttribute('data-target', '#deleteEmploiModal');
   
    }
    
    container.appendChild(button);
    button.click();
}
public onOpenModalC(candidature:Candidature, mode: string, idEmploi:number): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  this.idEmploi=idEmploi;
  // console.log(this.idEmploi);
  if(mode === 'postuler') {
    this.addCandidature=candidature;
    button.setAttribute('data-target','#addCandidatureModal')
  }
  container.appendChild(button);
  button.click();
}
public onOpenModalCa( mode: string, idEmploi:number): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  this.idEmploi=idEmploi;
  // console.log(this.idEmploi);
  if(mode === 'candidature'){
    
    this.getCandidaturesByEmploi(idEmploi);
 
    button.setAttribute('data-target','#getCandidatureModal') 
  }
  container.appendChild(button);
  button.click();
}



open(content,idEmploi) {
  this.candidatureService.getCandidaturesByEmploi(idEmploi).subscribe((result)=>{
    this.candidatures = result;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  });
  })
  
}


}