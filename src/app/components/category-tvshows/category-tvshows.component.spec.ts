import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTvshowsComponent } from './category-tvshows.component';

describe('CategoryTvshowsComponent', () => {
  let component: CategoryTvshowsComponent;
  let fixture: ComponentFixture<CategoryTvshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryTvshowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
