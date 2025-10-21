import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header'; 
import { FormsModule } from '@angular/forms';
import { Cadastro } from './paginas/cadastro/cadastro';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule, Cadastro], // 👈 use o nome completo
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('BookStar');
}
