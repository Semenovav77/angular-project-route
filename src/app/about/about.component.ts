import { Component, OnInit } from '@angular/core';
export class Phone{
  constructor(public title: string,
              public price: number,
              public company: string,
              public email: string)
  { }
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  phone: Phone = new Phone("", 0, "Huawei", '1@ya.ru');
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  addPhone(){
    this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company, this.phone.email));
  }
  onTitleChange() {
    alert(this.phone.title)
  }

}
