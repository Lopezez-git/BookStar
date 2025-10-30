import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private http: HttpClient, private router: Router) {}

  fazerLogin() {
    const dadosLogin = {
      email: this.email,
      senha: this.senha
    };

    this.http.post('http://localhost:5010/usuario/login', dadosLogin).subscribe({
      next: (res: any) => {
        console.log('Login realizado com sucesso:', res);
        alert(res.mensagem);

        // Salva o token e o usuário
        localStorage.setItem('token', res.token);
        localStorage.setItem('usuario', JSON.stringify(res.usuario));

        // Redireciona
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Erro ao fazer login:', err);
        alert(err.error?.erro || 'Falha no login. Verifique o email e a senha.');
      }
    });
  }
}
