import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { LivrosService } from '../../services/livros.service';

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
  templateUrl: './livros.html',
  styleUrls: ['./livros.css'],
  providers: [LivrosService]
})
export class LivrosComponent implements OnInit {
  @Input() tema: string = 'best sellers';
  @Input() maxResults: number = 40;
  @Input() filtrarMature: boolean = true;

  livros: BookItem[] = [];
  carregando = false;
  erro = '';

  constructor(private livrosService: LivrosService) {}

  ngOnInit(): void {
    this.buscarLivros(this.tema);
  }

  buscarLivros(termo: string): void {
    this.carregando = true;
    this.livrosService.buscarLivros(termo, this.maxResults).subscribe({
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

  getImagemLivro(volumeInfo: VolumeInfo): string {
    const img = volumeInfo.imageLinks;
    return img?.large || img?.medium || img?.thumbnail || img?.smallThumbnail || 'assets/placeholder-book.jpg';
  }
}
