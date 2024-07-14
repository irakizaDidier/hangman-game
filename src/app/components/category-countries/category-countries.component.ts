import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-category-countries',
  templateUrl: './category-countries.component.html',
  styleUrls: ['./category-countries.component.css'],
})
export class CategoryCountriesComponent implements OnInit {
  categoryName = 'Countries';
  items: any[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCategoryData(this.categoryName).subscribe((data) => {
      this.items = data;
    });
  }
}
