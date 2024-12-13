import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;    // "!" hier noch notwendig, da Variable noch nicht initalisiert wurde

  constructor() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);

  }

  takeCard() {
    if (!this.pickCardAnimation) {
      // this.currentCard = this.game.stack.pop(); => hier kommt Fehlermeldung vermutlich wegen neuerer Angular-Version

      // Alternative vom Modul 13 - TypeScript Grundkurs, 09 - Tipps und Tricks (pop() Funktion, if() Abfrage nutzen)
      let card = this.game.stack.pop();

      if (card != undefined) {
        this.currentCard = card;
      } else {
        card
      }

      this.pickCardAnimation = true;
      console.log('New card: ' + this.currentCard);
      console.log('Game is', this.game);

      setTimeout(() => {
        this.game.playedCard.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
}
