import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: 'phone-list-item.tpl.html'
})
export class PhoneListItemComponent {

  @Input()
  phone;
}
