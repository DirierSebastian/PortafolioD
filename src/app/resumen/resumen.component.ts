import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {

  constructor(private titleService: Title){
    this.titleService.setTitle('Dirier Sebastian Aguirre Valenzuela - Resumen')
  }

}
