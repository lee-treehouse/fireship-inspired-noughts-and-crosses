import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner?: string;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    // is this the same as this.squares = [null, null, null, null, null, null, null, null, null];

    // the tutorial said to use null but this doesn't work, probably strict null checks enabled.. I will make winnder optional and use undefined here
    this.winner = undefined;
    this.xIsNext = true;
  }

  // usually I do this like a getPlayer method so this is cool
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(squareIndex: number) {
    if (!this.squares[squareIndex]) {
      this.squares.splice(squareIndex, 1, this.player);
      //splice is start, deletecount, and item so I don't see the difference between just setting the array item value in this case
      // so is it the same as this.squares[squareIndex] = this.player ? I think so

      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const winnableLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // TODO unit test and refactor
    for (let i = 0; i < winnableLines.length; i++) {
      const [a, b, c] = winnableLines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] == this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
