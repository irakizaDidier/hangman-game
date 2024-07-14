import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-category-movies',
  templateUrl: './category-movies.component.html',
  styleUrls: ['./category-movies.component.css'],
})
export class CategoryMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCategoryData('Movies').subscribe((data) => {
      this.movies = data;
    });
  }
}
