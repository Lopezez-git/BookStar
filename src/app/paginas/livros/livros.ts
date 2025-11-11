import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosService } from '../../services/livros.service';
import { NgIf, NgFor } from '@angular/common'; // 👈 Garante diretivas Angular no template

interface VolumeInfo {
  title: string;
  authors?: string[];
  imageLinks?: {
    thumbnail?: string;
    smallThumbnail?: string;
    medium?: string;
    large?: string;
  };
  previewLink?: string;
  description?: string;
  publishedDate?: string;
  publisher?: string;
  maturityRating?: string;
}

interface BookItem {
  id: string;
  volumeInfo: VolumeInfo;
}

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  providers: [LivrosService],
  templateUrl: './livros.html',
  styleUrls: ['./livros.css']
})
export class LivrosComponent implements OnInit {
  @Input() tema: string = 'romance';
  @Input() maxResults: number = 40;
  @Input() filtrarMature: boolean = true;

  livros: BookItem[] = [];
  carregando = false;
  erro = '';

  constructor(private livrosService: LivrosService) {}

  ngOnInit(): void {
    console.log('🔍 Iniciando busca de livros com tema:', this.tema);
    this.buscarLivros(this.tema);
  }

  buscarLivros(termo: string): void {
    // 🔹 Evita travar a página se o tema tiver 1 ou 2 letras (ex: "IT")
    if (!termo || termo.trim().length === 0) {
      this.erro = 'Tema inválido';
      return;
    }

    this.carregando = true;
    this.erro = '';
    this.livros = [];

    console.log(`⏳ Buscando "${termo}" (máx: ${this.maxResults})...`);

    this.livrosService.buscarLivros(termo, this.maxResults).subscribe({
      next: (response) => {
        this.carregando = false;
        console.log('✅ Resposta da API:', response);

        if (!response.items || response.items.length === 0) {
          this.erro = 'Nenhum livro encontrado.';
          return;
        }

        // 🔹 Filtra resultados com imagem e título
        this.livros = response.items
          .filter((livro: BookItem) => {
            const info = livro.volumeInfo;
            if (!info) return false;
            const temImagem = !!info.imageLinks?.thumbnail;
            const naoMature = this.filtrarMature
              ? info.maturityRating !== 'MATURE'
              : true;
            return temImagem && naoMature;
          })
          .slice(0, this.maxResults); // 🔹 Garante limite real

        console.log(`📖 ${this.livros.length} livros renderizados.`);
      },
      error: (err) => {
        this.carregando = false;
        console.error('❌ Erro:', err);
        this.erro = 'Erro ao buscar livros.';
      }
    });
  }

  getImagemLivro(volumeInfo: VolumeInfo): string {
    const img = volumeInfo.imageLinks;
    return (
      img?.large ||
      img?.medium ||
      img?.thumbnail ||
      img?.smallThumbnail ||
      'assets/placeholder-book.jpg'
    );
  }

  abrirLivro(livro: BookItem): void {
    const link = livro.volumeInfo.previewLink;
    if (link) window.open(link, '_blank');
  }

  onImagemErro(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/placeholder-book.jpg';
  }
}
