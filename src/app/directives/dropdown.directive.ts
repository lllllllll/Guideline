import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {
  active: boolean;

  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer) {}

  @HostListener('click') public onClick(event: any): void {
    this.active = !this.active;
    if (this.active) {
      this._renderer.setElementAttribute(this._elRef.nativeElement, 'open', '');
    } else {
      this._renderer.setElementAttribute(this._elRef.nativeElement, 'open', null);
    }
  }
}
