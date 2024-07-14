import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-category-sports',
  templateUrl: './category-sports.component.html',
  styleUrls: ['./category-sports.component.css'],
})
export class CategorySportsComponent implements OnInit {
  categoryName = 'Sports';
  items: any[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCategoryData(this.categoryName).subscribe((data) => {
      this.items = data;
    });
  }
}
