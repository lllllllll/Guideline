import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ka-radio',
  templateUrl: './ka-radio.component.html'
})
export class KaRadioComponent implements OnInit {

  @Input() model;
  @Input() title;
  @Input() groupName;
  @Input() value;
  @Input() required;

  // generate variable for label Id
  gName;

  constructor() { }

  ngOnInit() {
    this.RandomNum();
    if (this.required === '') {
      this.required = true;
    }
  }

  // generate ramdom name for label Id
  RandomNum() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.gName = '_G' + getRandomInt(1, 1000);
  }

}
