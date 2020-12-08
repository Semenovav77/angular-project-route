import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myForm : FormGroup;
  constructor() {
    this.myForm = new FormGroup({

      "userName": new FormControl("Tom", (Validators.required)),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "userPhone": new FormControl("", [Validators.required,Validators.pattern("[0-9]{10}")])
    });
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.myForm);
  }

}
