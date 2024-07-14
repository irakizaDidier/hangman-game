import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-category-tvshows',
  templateUrl: './category-tvshows.component.html',
  styleUrl: './category-tvshows.component.css',
})
export class CategoryTvshowsComponent implements OnInit {
  categoryName = 'TV Shows';
  items: any[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCategoryData(this.categoryName).subscribe((data) => {
      this.items = data;
    });
  }
}
