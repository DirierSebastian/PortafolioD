import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Proyecto } from '../_models/Proyecto';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit{

  proyectos = {} as Proyecto[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  mongo: boolean = false;
  csharp: boolean = false;
  sql: boolean = false;
  asp: boolean = false;
  firebase: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectServices: ProjectsService){
    this.titleService.setTitle('Dirier Sebastian Aguirre Valenzuela - Portafolio');
  }
  ngOnInit(): void {
    this.proyectos = this.projectServices.GetProjects();
  }

  Filter(){
    let filterTags: Tag[]=[];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.mongo){
      filterTags.push(Tag.MONGO);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.sql){
      filterTags.push(Tag.SQL);
    }
    if(this.firebase){
      filterTags.push(Tag.FIREBASE);
    }
    if(this.asp){
      filterTags.push(Tag.ASP);
    }

    if(this.angular || this.typescript || this.mongo || this.csharp || this.sql || this.firebase || this.asp){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.proyectos = this.projectServices.GetProjectByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.mongo = false;
    this.firebase = false;
    this.sql = false;
    this.csharp = false;
    this.asp = false;
    this.filtering = false;
    
    this.proyectos = this.projectServices.GetProjects();
  }

}
