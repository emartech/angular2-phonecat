import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'bootstrap-select',
  templateUrl: 'bootstrap-select.tpl.html'
})
export class BootstrapSelectComponent {

  public selectedOption = '';
  public isOpened = false;

  @Input()
  options = [];

  @Input()
  placeholder = '';

  @Output()
  onSelect = new EventEmitter();

  displaySelectedOption() {
    return this.selectedOption || this.placeholder;
  }

  toggle() {
    this.isOpened = !this.isOpened;
  }

  select(option) {
    this.isOpened = false;
    this.selectedOption = option;
    this.onSelect.emit(option);
  }

}
