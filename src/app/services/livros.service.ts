import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  buscarLivros(termo: string, maxResults: number = 40): Observable<any> {
    const url = `${this.API_URL}?q=${encodeURIComponent(termo)}&maxResults=${maxResults}&filter=ebooks&printType=books&langRestrict=pt`;

    console.log('🌐 Buscando livros:', termo, '| Quantidade:', maxResults, '| URL:', url);
    
    return this.http.get(url);
  }
}
