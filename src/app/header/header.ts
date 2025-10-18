import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // 👈 Adicione isso
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {}
