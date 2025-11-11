import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home';
import { Cadastro } from './paginas/cadastro/cadastro';
import { LoginComponent } from './paginas/login/login';
import { Livros } from './paginas/livros/livros';
import { Livro } from './paginas/livro/livro';
import { AuthGuard } from './auth.guard';
import { Perfil } from './paginas/perfil/perfil';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastro', component: Cadastro },
    { path: 'login', component: LoginComponent },
    { path: 'livros', component: Livros },
    { path: 'livro', component: Livro },
    { path: 'perfil', component: Perfil, canActivate: [AuthGuard] }

];
