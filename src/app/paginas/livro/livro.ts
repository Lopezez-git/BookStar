import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-livro-detalhes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro.html',
  styleUrls: ['./livro.css']
})
export class LivroComponent implements OnInit {
  livro: any = null;
  carregando = true;
  erro = '';
  
  // Dados do usuário
  avaliacaoUsuario = 0;
  comentarioUsuario = '';
  livroFinalizado = false;
  
  // Hover das estrelas
  hoverRating = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livrosService: LivrosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.buscarDetalhesLivro(id);
    }
  }

  buscarDetalhesLivro(id: string): void {
    this.carregando = true;
    this.livrosService.buscarLivros(id).subscribe({
      next: (res) => {
        this.livro = res;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao carregar detalhes do livro.';
        this.carregando = false;
      }
    });
  }

  getImagemLivro(): string {
    return this.livro?.volumeInfo?.imageLinks?.thumbnail || 'assets/placeholder-book.jpg';
  }

  getAutores(): string {
    return this.livro?.volumeInfo?.authors?.join(', ') || 'Autor desconhecido';
  }

  getDescricao(): string {
    return this.livro?.volumeInfo?.description || 'Sem descrição disponível.';
  }

  getTitulo(): string {
    return this.livro?.volumeInfo?.title || 'Título não disponível';
  }

  // Sistema de avaliação
  setRating(rating: number): void {
    this.avaliacaoUsuario = rating;
  }

  setHoverRating(rating: number): void {
    this.hoverRating = rating;
  }

  resetHoverRating(): void {
    this.hoverRating = 0;
  }

  getRatingArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  // Ações
  toggleFinalizado(): void {
    this.livroFinalizado = !this.livroFinalizado;
  }

  salvarAvaliacao(): void {
    if (this.avaliacaoUsuario === 0) {
      alert('Por favor, selecione uma avaliação!');
      return;
    }
    
    // Aqui você vai integrar com o backend do seu amigo
    const avaliacao = {
      livroId: this.livro.id,
      rating: this.avaliacaoUsuario,
      comentario: this.comentarioUsuario,
      finalizado: this.livroFinalizado
    };
    
    console.log('Salvando avaliação:', avaliacao);
    alert('Avaliação salva com sucesso!');
  }

  voltar(): void {
    this.router.navigate(['/livros']);
  }
}