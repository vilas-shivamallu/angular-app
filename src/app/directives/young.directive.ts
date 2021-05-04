import { Directive,Input,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appYoung]'
})
export class YoungDirective {

  @HostBinding('class.is-young') isYoung = true;
  @HostBinding('class.is-young-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
    }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set appYoung(value) {
    this.isYoung = value;
  }

}
