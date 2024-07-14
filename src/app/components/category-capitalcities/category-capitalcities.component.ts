import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-category-capitalcities',
  templateUrl: './category-capitalcities.component.html',
  styleUrl: './category-capitalcities.component.css',
})
export class CategoryCapitalcitiesComponent implements OnInit {
  categoryName = 'Capital Cities';
  items: any[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCategoryData(this.categoryName).subscribe((data) => {
      this.items = data;
    });
  }
}
