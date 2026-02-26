import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <h3>Favorite Songs</h3>
    <ol>
        <li>Diablos</li>
        <li>Encuentros</li>
        <li>Good News</li>
        <li>Home</li>

    </ol>
  `,
  styles: `
      ol {
        list-style-type: upper-roman;
      }
  `,
})
export class AppComponent {}
