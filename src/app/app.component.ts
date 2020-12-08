import { Component } from '@angular/core';
import {CardsService} from "src/shared/cards.service";

/*export interface Card {
  id: string;
  title: string;
  text: string;
  completed: boolean;
}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cardsService: CardsService) {
  }

  toggle = true

  /*cards: Card[] = [
    {
      id: '1',
      title: "Card 1",
      text: "This is Card 1",
      completed: true
    },
    {
      id: '2',
      title: "Card 2",
      text: "This is Card 2",
      completed: false
    },
    {
      id: '3',
      title: "Card 3",
      text: "This is Card 3",
      completed: false
    },
  ]*/
  toggleCards() {
    this.toggle = !this.toggle
  }
  /*onToggle(id: string) {
    this.cards = this.cards.map((card) => {
      if (card.id===id) {
        return {
          ...card,
          completed: !card.completed
        }
      }
      else return card
    })
  }*/
}
