import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

  constructor(private livrosService: LivrosService, private router: Router) {}

  ngOnInit(): void {
    this.buscarLivros('suspense');
  }

  buscarLivros(termo: string): void {
    this.carregando = true;
    this.livrosService.buscarLivros(termo, 40).subscribe({
      next: (res) => {
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

  abrirLivro(livro: any) {
    this.router.navigate(['/livro', livro.id]);
  }
}
