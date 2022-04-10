import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ randomNumber }}
    </p>
  `,
  styles: [],
})
export class SquareComponent {
  randomNumber = Math.random();
}
