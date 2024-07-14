import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http
      .get<any>(this.dataUrl)
      .pipe(map((data) => Object.keys(data.categories)));
  }

  getCategoryData(category: string): Observable<any[]> {
    return this.http
      .get<any>(this.dataUrl)
      .pipe(map((data) => data.categories[category]));
  }
}
