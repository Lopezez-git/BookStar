import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true, // 👈 Adicione isso
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [RouterLink]
})
export class HeaderComponent {}
