import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.html',
  styleUrls: ['./livro.css']
})
export class LivroComponent implements OnInit {

  livro: any;

  constructor(
    private route: ActivatedRoute,
    private livrosService: LivrosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.livrosService.buscarLivros(id).subscribe(res => {
        this.livro = res.volumeInfo;
      });
    }
  }
}
