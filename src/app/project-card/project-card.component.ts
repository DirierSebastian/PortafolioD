import { Component, Input } from '@angular/core';
import { Proyecto } from '../_models/Proyecto';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../_services/project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Proyecto;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService){

  }

  OpenProjectModal(){
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    };

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }

}
