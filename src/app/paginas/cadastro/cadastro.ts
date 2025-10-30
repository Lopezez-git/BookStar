import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro {

  nome = '';
  username = '';
  email = '';
  senha = '';

  constructor(private http: HttpClient, private router: Router) {}

  cadastrarUsuario() {
    const novoUsuario = {
      nome: this.nome,
      username: this.username,
      email: this.email,
      senha: this.senha
    };

    this.http.post('http://localhost:5010/usuario/cadastro', novoUsuario).subscribe({
      next: (res) => {
        console.log('Usuário cadastrado com sucesso:', res);
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']); // 🔥 redireciona após cadastrar
      },
      error: (err) => {
        console.error('Erro ao cadastrar usuário:', err);
        alert('Falha ao cadastrar. Verifique o servidor.');
      }
    });
  }
}
