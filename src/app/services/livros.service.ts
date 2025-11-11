import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  buscarLivros(termo: string, maxResults: number = 10): Observable<any> {
  const requests = [];
  const pageSize = 10; // a API só retorna 10 por vez
  const totalPages = Math.ceil(maxResults / pageSize);

  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * pageSize;
    const url = `${this.API_URL}?q=${encodeURIComponent(termo)}&maxResults=${pageSize}&startIndex=${startIndex}&printType=books`;
    requests.push(this.http.get(url));
  }

  // Junta todas as respostas
  return forkJoin(requests).pipe(
    map((responses: any[]) => {
      const allItems = responses.flatMap(res => res.items || []);
      return { items: allItems };
    })
  );
}

}
