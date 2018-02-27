import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ka-textarea',
  templateUrl: './ka-textarea.component.html'
})
export class KaTextareaComponent implements OnInit {

  @Input() model;
  @Input() title;
  @Input() rows;
  @Input() required;

  valid;

  // generate variable for label Id
  gName;

  constructor() { }

  ngOnInit() {
    this.RandomNum();
    if (this.required === '') {
      this.required = true;
    }
  }

  // onClike
  toggleClick() {
    this.valid = true;
  }
  // onBlur
  toggleBlur() {
    if (this.model === '' || this.model === undefined) {
      this.valid = false;
    } else {
      this.valid = true;
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
