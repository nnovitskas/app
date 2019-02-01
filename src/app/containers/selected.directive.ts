import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {
  @HostBinding('class.unselected') isSelected = false;
  @HostListener('click') toggleSelected() {
    this.isSelected = !this.isSelected;
  }

}
