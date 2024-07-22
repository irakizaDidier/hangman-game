import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from '../../services/data-service.service';
import { PickCategoryComponent } from './pick-category.component';

describe('PickCategoryComponent', () => {
  let component: PickCategoryComponent;
  let fixture: ComponentFixture<PickCategoryComponent>;
  let mockDataService: {
    getCategories: jest.Mock<any, any>;
    getCategoryData: jest.Mock<any, any>;
  };
  let mockRouter: { navigate: jest.Mock<any, any> };

  beforeEach(async () => {
    mockDataService = {
      getCategories: jest.fn().mockReturnValue(of(['Category1', 'Category2'])),
      getCategoryData: jest.fn().mockReturnValue(of([])),
    };

    mockRouter = { navigate: jest.fn() };

    await TestBed.configureTestingModule({
      declarations: [PickCategoryComponent],
      providers: [
        { provide: DataService, useValue: mockDataService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call selectCategory and navigate', () => {
    const category = 'Category1';
    component.selectCategory(category);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/game', category], {
      state: { data: [] },
    });
  });
});
