import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livros.html',
  styleUrls: ['./livros.css'],
  providers: [LivrosService]
})
export class LivrosComponent implements OnInit {
  livros: any[] = [];
  carregando = false;
  erro = '';

  constructor(private livrosService: LivrosService) {}

  ngOnInit(): void {
    this.buscarLivros('suspence');
  }

  buscarLivros(termo: string): void {
    this.carregando = true;
    this.livrosService.buscarLivros(termo, 40).subscribe({
      next: (res) => {
        console.log(res);
        this.livros = res.items || [];
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao buscar livros.';
        this.carregando = false;
      }
    });
  }

  getImagemLivro(livro: any): string {
    return livro.volumeInfo?.imageLinks?.thumbnail || 'assets/placeholder-book.jpg';
  }
}
