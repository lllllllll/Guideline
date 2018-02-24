import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ka-button',
  templateUrl: './ka-button.component.html'
})
export class KaButtonComponent implements OnInit {

  @Input() type;
  @Input() disabled;

  constructor() { }

  ngOnInit() {
    if (this.disabled === '') {
      this.disabled = true;
    }
  }

}
