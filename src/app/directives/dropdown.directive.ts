import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostListener('click') public onClick(event: any): void {
    console.log('Click');
  }

  @HostListener('blur') public onBlur(event: any): void {
    console.log('Blur');
  }

  constructor() {}

}
