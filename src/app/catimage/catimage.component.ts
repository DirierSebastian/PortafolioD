import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catimage',
  templateUrl: './catimage.component.html',
  styleUrls: ['./catimage.component.css']
})
export class CatimageComponent implements OnInit {
  catImageUrl: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCatImage();
  }

  getCatImage(): void {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';

    this.http.get(apiUrl).subscribe((response: any) => {
      this.catImageUrl = response[0].url;
    });
  }
}