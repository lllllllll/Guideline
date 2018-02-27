import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ka-checkbox',
  templateUrl: './ka-checkbox.component.html'
})
export class KaCheckboxComponent implements OnInit {

  @Input() model;
  @Input() title;
  @Input() required;

  // generate variable for label Id
  gName;

  constructor() { }

  ngOnInit() {
    this.RandomNum();
  }

  // generate ramdom name for label Id
  RandomNum() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.gName = '_G' + getRandomInt(1, 1000);
  }

}
