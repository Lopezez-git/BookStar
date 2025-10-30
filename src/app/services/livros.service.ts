import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {}

  buscarLivros(termo: string): Observable<any> {
    return this.http.get(
      `${this.API_URL}${encodeURIComponent(termo)}&maxResults=20&filter=ebooks&printType=books&langRestrict=pt&maxAllowedMaturityRating=not-mature`
    );
  }
}
