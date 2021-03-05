import { Component, ElementRef } from '@angular/core';

@Component({
  template: ''
})
export class ParentComponent {
  constructor(private el: ElementRef) {
    el.nativeElement.focus();
  }
}

@Component({
  template: ''
})
export class ChildComponent extends ParentComponent {
  thisLineCausesError = 1;
}