import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {

  model = 'YAKA Chang';
  radio = 1;

  constructor() { }

  ngOnInit() {
  }

}
