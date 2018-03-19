import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ka-dropdown',
  templateUrl: './ka-dropdown.component.html'
})
export class KaDropdownComponent implements OnInit {

  @Input() kaStyle;
  @Input() model;

  constructor() { }

  ngOnInit() {
  }

}
