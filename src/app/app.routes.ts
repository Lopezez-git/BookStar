import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home';
import { Cadastro } from './paginas/cadastro/cadastro';



export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: Cadastro}
];
