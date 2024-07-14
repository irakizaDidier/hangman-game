import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAnimalsComponent } from './category-animals.component';

describe('CategoryAnimalsComponent', () => {
  let component: CategoryAnimalsComponent;
  let fixture: ComponentFixture<CategoryAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryAnimalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
