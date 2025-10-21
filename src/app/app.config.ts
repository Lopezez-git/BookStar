import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // Importa a função que vai fornecer o roteamento
import { provideHttpClient } from '@angular/common/http'; // Importa a função que fornece o HttpClient para requisições HTTP
import { routes } from './app.routes'; // Importa as rotas definidas do app

export const appConfig: ApplicationConfig = {
  providers: [
    // Aqui passamos todos os "providers" que a aplicação precisa
    provideRouter(routes), // Configura o roteamento da aplicação usando nossas rotas
    provideHttpClient()    // Disponibiliza o HttpClient globalmente para qualquer componente
  ]
};
