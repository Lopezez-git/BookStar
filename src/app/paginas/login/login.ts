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
    // ============ VERSÃO SEM API (USANDO LOCALSTORAGE) ============
    const dadosLogin = {
      email: this.email,
      senha: this.senha
    };

    // Pega os usuários cadastrados do localStorage
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    // Busca o usuário pelo email e senha
    const usuarioEncontrado = usuariosCadastrados.find(
      (u: any) => u.email === this.email && u.senha === this.senha
    );

    if (usuarioEncontrado) {
      // Login bem-sucedido!
      alert('Login realizado com sucesso!');
      
      // Salva os dados do usuário logado
      const userData = {
        nome: usuarioEncontrado.nome,
        username: usuarioEncontrado.username, // 🔥 Salva o username
        email: usuarioEncontrado.email,
        imagem_perfil: usuarioEncontrado.imagem_perfil || '',
        seguidores: 0,
        seguindo: 0
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', 'true');
      
      // Redireciona para o perfil ou home
      this.router.navigate(['/perfil']);
    } else {
      // Login falhou
      alert('Email ou senha incorretos!');
    }

    // ============ VERSÃO COM API (COMENTADA PARA USAR NO FUTURO) ============
    /*
    this.http.post('http://localhost:5010/usuario/login', dadosLogin).subscribe({
      next: (res: any) => {
        console.log('Login realizado com sucesso:', res);
        alert(res.mensagem);

        // Salva o token
        localStorage.setItem('token', res.token);
        
        // Salva os dados do usuário (com username incluído)
        const userData = {
          nome: res.usuario.nome || res.usuario.name,
          username: res.usuario.username || res.usuario.user,
          email: res.usuario.email,
          imagem_perfil: res.usuario.imagem_perfil || '',
          seguidores: res.usuario.seguidores || 0,
          seguindo: res.usuario.seguindo || 0
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('usuario', JSON.stringify(res.usuario));

        // Redireciona
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Erro ao fazer login:', err);
        alert(err.error?.erro || 'Falha no login. Verifique o email e a senha.');
      }
    });
    */
  }
}