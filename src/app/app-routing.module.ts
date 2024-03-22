import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CatimageComponent } from './catimage/catimage.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'catimage', component: CatimageComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: InicioComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
