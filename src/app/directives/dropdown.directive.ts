import { Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {
  active: boolean;

  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer) {
    console.log('!');
  }

  @HostListener('click') public onClick(event: any): void {
    this.active = !this.active;
    this._renderer.setElementAttribute(this._elRef.nativeElement, 'open', '');
    console.log('Click', this.active);
  }
}
