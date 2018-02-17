import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html'
})
export class SidebarLeftComponent implements OnInit {

  public linkModel = [
    {
      text: 'Logo Guide line',
      linke: 'logoguideline'
    },
    {
      text: 'Color Palette',
      linke: 'colorpalette'
    },
    {
      text: 'Typo Graphy',
      linke: 'typogrphy'
    },
    {
      text: 'Icons',
      linke: 'icons'
    }
  ];

  public component = [
    {
      text: 'Buttons and Link',
      linke: 'buttonandlink'
    },
    {
      text: 'Breadcrumb',
      linke: 'breadcrumb'
    },
    {
      text: 'Forms',
      linke: 'form'
    },
    {
      text: 'Dropdown',
      linke: 'dropdown'
    },
    {
      text: 'Navbas',
      linke: 'navbar'
    },
    {
      text: 'Menu',
      linke: 'menu'
    },
    {
      text: 'Modal and Notifications',
      linke: 'modal'
    },
    {
      text: 'Tabs',
      linke: 'tabs'
    },
    {
      text: 'Table',
      linke: 'icons'
    }
  ];

  constructor() {}

  ngOnInit() {}

}
