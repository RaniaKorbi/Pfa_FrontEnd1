import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import {Cv} from 'src/models/Cv'
import { CvService } from 'src/services/cv.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-cv',
  templateUrl:'./cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cv: Cv ;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  currentEmail: string;
  email:string;

  fileInfos: Observable<any>;

   constructor(private CVService: CvService ,public authService :AuthService, private router: Router) { }


  ngOnInit(): void {
    this.fileInfos = this.CVService.getFiles()
  }

 selectFile(event): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.currentEmail=this.email;
    this.CVService.upload(this.currentFile,this.currentEmail).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.CVService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }
}

