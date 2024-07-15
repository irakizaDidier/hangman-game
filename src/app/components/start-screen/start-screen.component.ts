import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.css',
})
export class StartScreenComponent {
  constructor(private router: Router) {}

  startGame() {
    this.router.navigate(['/pick-category']);
  }
}
