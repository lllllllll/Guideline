import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {

  model = 'YAKA Chang';
  radio = 1;

  selectList = [
    {Id: 1, Value: 'Input'},
    {Id: 2, Value: 'Checkbox'},
    {Id: 3, Value: 'Radio'},
    {Id: 4, Value: 'Textarea'},
    {Id: 5, Value: 'Select'}
  ];

  models = { type : this.selectList[4]};

  constructor() { }

  ngOnInit() {
  }

}
