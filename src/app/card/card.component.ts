import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
/*import {Card} from "src/app/app.component";*/
import {Card, CardsService} from "src/shared/cards.service";
import {apiService} from "src/shared/api.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";

//template: `
//     <div class="card">
//       <h2> Card</h2>
//       <p>Lorem ajhsgj sajdhgja dasjhgjasn djhgas</p>
//     </div>
//   `,
//   styles: [
//     `.card {
//       padding: .5rem 1rem;
//       border: 1px dashed #ccc;
//     }
//     `
//   ]

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  //interpolation: ['[[',']]']
})
export class CardComponent implements OnInit{
  @Input() card: Card | undefined
 /* @Input() index: number | undefined
  @Output() onToggle = new EventEmitter<string>()
*/
  constructor(private cardsService: CardsService, private apiService: apiService) {

  }

  date: Date = new Date();
  title: string = 'My card title';
  text: string =  'My sample text';
  number = 42;
  array = [1, 1, 2, 3, 5, 8, 13];
  obj = {
    name: 'Test',
    info: {
      job: 'frontend'
    }
  }

  disabled = false;

  textColor: string | null = null

  ngOnInit(): void {
/*    setTimeout(() => {
      this.imgUrl = 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png';
      this.disabled = true;
    }, 3000)*/
    /*this.cardsService.fetchTodos().subscribe((data) => {
      console.log('Load complete')
    })*/
    const params = {
      limit: '20',
    }
    this.apiService.getTodos().subscribe(response => {
      console.log(response)
    })
  }

  imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png'

  getinfo(): string {
    return 'This is my info';
  }
  changeTitle() {
    this.title = "New title"
  }
  inputHandler(event: any): void {
    const value = event.target.value;
    this.title = value
  }
  changeHandler(): void {
    console.log(this.title)
  }

  onChangeCheckbox(id: string): void {
    /*this.onToggle.emit(id)*/
    this.cardsService.onToggle(id)
  }
}
