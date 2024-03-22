import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Proyecto } from 'src/app/_models/Proyecto';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  project = {} as Proyecto;

  constructor(public bsModalRef: BsModalRef){
    
  }

}
