import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySportsComponent } from './category-sports.component';

describe('CategorySportsComponent', () => {
  let component: CategorySportsComponent;
  let fixture: ComponentFixture<CategorySportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorySportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
