import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: 'search-box.tpl.html'
})
export class SearchBoxComponent {

  @Output()
  onInputChange = new EventEmitter();

  handleKeyUp($event) {
    this.onInputChange.emit($event.target.value);
  }
}
