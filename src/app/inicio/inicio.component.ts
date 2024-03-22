import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Proyecto } from '../_models/Proyecto';
import { descripcionService } from '../descripcion.service';
import { Curriculum } from '../_models/Descripcion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  proyectoDestacado = {} as Proyecto;
  descrip: Curriculum[]=[];


  constructor(private titleService: Title, private projectService: ProjectsService, private renderer: Renderer2, private DescripcionService: descripcionService){
    this.titleService.setTitle('Dirier Sebastian Aguirre Valenzuela - Inicio')
  }

  ngOnInit(): void {
    this.proyectoDestacado = this.projectService.GetProjectById(5);
    this.DescripcionService.getCurriculum().subscribe((result:Curriculum[])=>{
      console.log(result);
      this.descrip = result;
  })
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Cv sin foto trabajo formal joven blanco azul  (1).pdf');
    link.setAttribute('download', 'cv.pdf');
    link.click();
    link.remove();
  }

}
