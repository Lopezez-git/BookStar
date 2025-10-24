import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home';
import { Cadastro } from './paginas/cadastro/cadastro';
import { Livros } from './paginas/livros/livros';
import { Livro} from './paginas/livro/livro';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: Cadastro},
     { path: 'livros', component: Livros },
    { path: 'livro', component: Livro }
];
