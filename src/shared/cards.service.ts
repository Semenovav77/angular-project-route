import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

export interface Card {
  id: string;
  title: string;
  text: string;
  completed: boolean;
}
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({providedIn: 'root'})
export class CardsService {
  public todos: Todo[] =[]
  public cards: Card[] = [
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
  ]

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=30')
      .pipe(tap(todos => this.todos = todos))

  }

  onToggle(id: string) {
    this.cards = this.cards.map((card) => {
      if (card.id===id) {
        return {
          ...card,
          completed: !card.completed
        }
      }
      else return card
    })
  }
}
