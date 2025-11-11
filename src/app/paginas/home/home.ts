import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LivrosService } from '../../services/livros.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  livrosPopulares: any[] = [];
  livrosPremiados: any[] = [];

  constructor(private livrosService: LivrosService) {}

  ngOnInit() {
    this.carregarLivros();
  }

  carregarLivros() {
    // Livros populares
    this.livrosService.buscarLivros('suspence').subscribe({ // <== filtros
      next: (res) => {
        this.livrosPopulares = (res.items || []).filter(
          (livro: any) =>
            livro.volumeInfo?.imageLinks?.thumbnail &&
            livro.volumeInfo?.title &&
            livro.volumeInfo?.maturityRating !== 'MATURE'
        );
      },
      error: (err) => console.error('Erro ao buscar livros populares:', err)
    });

    // Livros premiados
    this.livrosService.buscarLivros('disney').subscribe({ //<== filtros
      next: (res) => {
        this.livrosPremiados = (res.items || []).filter(
          (livro: any) =>
            livro.volumeInfo?.imageLinks?.thumbnail &&
            livro.volumeInfo?.title &&
            livro.volumeInfo?.maturityRating !== 'MATURE'
        );
      },
      error: (err) => console.error('Erro ao buscar livros premiados:', err)
    });
  }
}
