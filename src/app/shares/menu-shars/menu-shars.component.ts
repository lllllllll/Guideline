import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-shars',
  templateUrl: './menu-shars.component.html'
})
export class MenuSharsComponent implements OnInit {

  @Input() menuList;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
