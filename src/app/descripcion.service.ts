import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environments.development';
import { HttpClient } from '@angular/common/http';
import { Curriculum } from './_models/Descripcion';
@Injectable({
  providedIn: 'root'
})
export class descripcionService {
    url = 'CurriculumControllers';

    constructor(private http: HttpClient) { }
    
    public getCurriculum(): Observable<Curriculum[]> {
      return this.http.get<Curriculum[]>(`${environment.apiUrl}/${this.url}`);}
  }
  