import { Injectable } from '@angular/core';
import { Proyecto } from '../_models/Proyecto';
import { Tag } from '../_models/Tag';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  proyectos: Proyecto[] = [
    {id: 0, name: 'Proyecto de Angular', summary: 'Un proyecto de Angular cuya función es dar mi información en una página web', description: 'Portafolio en Angular', projectLink: 'N/A', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.MONGO], pictures: []},
    {id: 1, name: 'Proyecto de Windows Forms', summary: 'Un proyecto de Windows forms en el que puedes guardar instrumentos músicales usando listas y ciclos en el que fui partícipe', description: 'Listas en Windows.Forms', projectLink: 'https://github.com/JuanDm05/ProyectoDatos', tags: [Tag.CSHARP], pictures: []},
    {id: 2, name: 'Proyecto de Xamarin.Forms', summary: 'Un proyecto de Xamarin en el que se gestionan los datos y marca un límite si excedes el presupuesto', description: 'Gestor de gastos', projectLink: 'https://github.com/DirierSebastian/ProyectoGastos', tags: [Tag.CSHARP, Tag.FIREBASE], pictures: []},
    {id: 3, name: 'Proyecto de C#', summary: 'Un proyecto de C# que utiliza arreglos bidimensionales para simular a un caballo en un tablero de ajedrez en consola', description: 'Caballo de ajedrez', projectLink: 'https://github.com/DirierSebastian/CaballoAjedrez', tags: [Tag.CSHARP], pictures: []},
    {id: 4, name: 'Proyecto de C#', summary: 'Un proyecto sobre el apartado de aulas para la universidad haciendo uso de SQL Server, ASP.NET y C#', description: 'Pagina de apartado de aulas', projectLink: 'https://github.com/DirierSebastian/UTS', tags: [Tag.CSHARP, Tag.ASP, Tag.SQL], pictures: []},
    {id: 5, name: 'Proyecto de Xamarin.Forms', summary: 'Un proyecto de Xamarin.Forms en el que se usa Firebase, la aplicación trata de replicar una pokedex haciendo uso de un CRUD. La estructura es MVVM con actualización a tiempo real por Firebase', description: 'Un crud sobre Pokemon', projectLink: 'https://github.com/DirierSebastian/MVVM_implementacion_DSAV', tags: [Tag.CSHARP, Tag.ASP, Tag.SQL], pictures: ["../../../assets/Pokedex-German.png","../../../assets/0_NsHVyfpJ2k7ixTAd.png","../../../assets/81pCkp9ODEL._AC_UF894,1000_QL80_.jpg"]}
  ];

  constructor() { }

  GetProjects(){
    return this.proyectos;
  }

  GetProjectById(id:number): Proyecto{
    let project = this.proyectos.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError("No hay un proyecto con la id: "+ id);
    }

    return project;
  }
  
  GetProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Proyecto[] = [];

    this.proyectos.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }

    });

    return filteredProjects;
  }
}
