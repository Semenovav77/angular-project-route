import { Component, OnInit } from '@angular/core';
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {apiService} from "src/shared/api.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  id: string | undefined

  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;

  constructor(private apiService: apiService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data=> this.id = data);
    const params = {
      limit: '20',
      id: this.id
    }
    this.apiService.getTodos(params).subscribe(response => {
      console.log(response)
    })
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
