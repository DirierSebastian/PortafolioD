import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './_services/project-modal/project-modal.component'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { FormsModule } from '@angular/forms';
import { CatimageComponent } from './catimage/catimage.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    InicioComponent,
    PortafolioComponent,
    ResumenComponent,
    ContactoComponent,
    ProjectCardComponent,
    ProjectModalComponent,
    CatimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
