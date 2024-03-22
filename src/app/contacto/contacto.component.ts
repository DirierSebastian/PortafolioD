import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private titleService: Title){
    this.titleService.setTitle('Dirier Sebastian Aguirre Valenzuela - Contacto')
  }

}
