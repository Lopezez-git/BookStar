import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home';
import { Cadastro } from './paginas/cadastro/cadastro';
import { Login } from './paginas/login/login';



export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: Cadastro},
    {path: 'login', component: Login}
];
