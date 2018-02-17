import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Input() menuList;
  @Input() title;

  constructor() {
  }

  ngOnInit() {
    // console.log('>> ', this.menuList);
  }

}
