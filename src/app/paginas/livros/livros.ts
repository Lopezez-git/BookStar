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

  templateUrl: './livros.html',
  styleUrls: ['./livros.css']
})
export class Livros {
  livros = [
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' },
    { imagem: '' }
  ];

}
