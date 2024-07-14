import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-category-animals',
  templateUrl: './category-animals.component.html',
  styleUrls: ['./category-animals.component.css'],
})
export class CategoryAnimalsComponent implements OnInit {
  categoryName = 'Animals';
  items: any[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCategoryData(this.categoryName).subscribe((data) => {
      this.items = data;
    });
  }
}
