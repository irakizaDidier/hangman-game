import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCapitalcitiesComponent } from './category-capitalcities.component';

describe('CategoryCapitalcitiesComponent', () => {
  let component: CategoryCapitalcitiesComponent;
  let fixture: ComponentFixture<CategoryCapitalcitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryCapitalcitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCapitalcitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
