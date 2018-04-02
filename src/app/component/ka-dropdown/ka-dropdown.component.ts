import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ka-dropdown',
  templateUrl: './ka-dropdown.component.html'
})
export class KaDropdownComponent implements OnInit {
  // active = false;
  @Input() kaStyle;
  @Input() model;

  constructor() { }

  ngOnInit() {}

}
