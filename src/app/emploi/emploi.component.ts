import { Component, OnInit } from '@angular/core';
import { Emploi } from 'src/models/Emploi';


import { EmploiService } from 'src/services/emploi.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent implements OnInit {
  public emplois: Emploi[];
  public editEmploi: Emploi;
  public deleteEmploi: Emploi;
  constructor(private emploiService: EmploiService, private router: Router ,private authService : AuthService) {}
  ngOnInit(){
    this.getEmplois();
  }
  public getEmplois(): void {
    this.emploiService.getEmplois().subscribe(
      (response: Emploi[]) => {
        this.emplois = response;
        console.log(this.emplois);
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
        console.log(response);
        this.getEmplois();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmploi(emploi: Emploi):void {
    this.emploiService.updateEmploi(emploi).subscribe(
      (response: Emploi) => {
        console.log(response);
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
        console.log(response);
        this.getEmplois();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmplois(key: string): void {
    console.log(key);
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
}