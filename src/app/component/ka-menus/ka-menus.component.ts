import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ka-menus',
  templateUrl: './ka-menus.component.html'
})
export class KaMenusComponent implements OnInit {

  @Input() menuList;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }


}
