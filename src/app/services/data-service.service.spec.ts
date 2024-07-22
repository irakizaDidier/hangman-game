import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './data-service.service';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  const testData = {
    categories: {
      Category1: ['Data1', 'Data2'],
      Category2: ['Data3', 'Data4'],
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });

    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve categories', () => {
    service.getCategories().subscribe((categories) => {
      expect(categories).toEqual(['Category1', 'Category2']);
    });

    const req = httpTestingController.expectOne('assets/data/data.json');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should retrieve category data', () => {
    service.getCategoryData('Category1').subscribe((data) => {
      expect(data).toEqual(['Data1', 'Data2']);
    });

    const req = httpTestingController.expectOne('assets/data/data.json');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });
});
