import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ rando }}
    </p>
  `,
  styles: [],
})
export class SquareComponent {
  rando: number = 0;
  constructor() {
    setInterval(() => (this.rando = Math.random()), 500);
  }
}
