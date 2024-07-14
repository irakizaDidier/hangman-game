import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCountriesComponent } from './category-countries.component';

describe('CategoryCountriesComponent', () => {
  let component: CategoryCountriesComponent;
  let fixture: ComponentFixture<CategoryCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
