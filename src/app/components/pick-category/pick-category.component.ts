import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.component.html',
  styleUrls: ['./pick-category.component.css'],
})
export class PickCategoryComponent implements OnInit {
  categories: string[] = [];
  categoryData: { [key: string]: any[] } = {};

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((categories) => {
      this.categories = categories;
      categories.forEach((category) => {
        this.dataService.getCategoryData(category).subscribe((data) => {
          this.categoryData[category] = data;
        });
      });
    });
  }

  selectCategory(category: string): void {
    this.router.navigate(['/game', category], {
      state: { data: this.categoryData[category] },
    });
  }
}
