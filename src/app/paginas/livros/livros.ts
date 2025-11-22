import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LivrosService } from '../../services/livros.service';
import { HeaderComponent } from "../../header/header";

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './livros.html',
  styleUrls: ['./livros.css'],
  providers: [LivrosService]
})
export class LivrosComponent implements OnInit {
  livrosPopulares: any[] = [];

  constructor() { }

  ngOnInit() {
    // Apenas exemplo — depois você troca pelas imagens reais

    this.livrosPopulares = [
      { img: '/livros/livro1.png' },
      { img: '/livros/livro2.png' },
      { img: '/livros/livro3.png' },
      { img: '/livros/livro4.png' },
      { img: '/livros/livro5.png' },
      { img: '/livros/livro6.png' },
      { img: '/livros/livro7.png' },
      { img: '/livros/livro8.png' },
      { img: '/livros/livro9.png' },
      { img: '/livros/livro10.png' },
      { img: '/livros/livro11.png' },
      { img: '/livros/livro12.png' },
      { img: '/livros/livro13.png' },
      { img: '/livros/livro14.png' },
      { img: '/livros/livro15.png' },
      { img: '/livros/livro16.png' },
      { img: '/livros/livro17.png' },
      { img: '/livros/livro18.png' },
      { img: '/livros/livro19.png' },
      { img: '/livros/livro20.png' },
      { img: '/livros/livro21.png' },
      { img: '/livros/livro22.png' },
      { img: '/livros/livro23.png' },
      { img: '/livros/livro24.png' },
      { img: '/livros/livro25.png' },
      { img: '/livros/livro26.png' },
      { img: '/livros/livro27.png' },
      { img: '/livros/livro29.jpg' },
      { img: '/livros/livro30.jpg' },
      { img: '/livros/livro31.jpg' },
      { img: '/livros/livro32.jpg' },
      { img: '/livros/livro33.jpg' },
      { img: '/livros/livro34.jpg' },
      { img: '/livros/livro35.jpg' },
      { img: '/livros/livro36.jpg' },


    ];
  }
}
