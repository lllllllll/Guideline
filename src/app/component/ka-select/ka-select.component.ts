import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ka-select',
  templateUrl: './ka-select.component.html'
})
export class KaSelectComponent implements OnInit {
  @Input() title;
  @Input() model;
  @Input() required;
  @Input() optionList;

  // add variable toggle
  aClass;
  // generate variable for label Id
  gName;

  constructor() { }

  ngOnInit() {
    this.RandomNum();
    this.toggleBlur();
    if (this.required === '') {
      this.required = true;
    }
  }

  // onClike
  toggleClick() {
    this.aClass = true;
  }
  // onBlur
  toggleBlur() {
    if (this.model === '' || this.model === undefined) {
      this.aClass = false;
    } else {
      this.aClass = true;
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
