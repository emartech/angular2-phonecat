import { Component, Input } from '@angular/core';
import { PhoneModel } from '../../models/phone.model';

@Component({
  selector: 'list-item',
  templateUrl: 'phone-list-item.tpl.html'
})
export class PhoneListItemComponent {

  @Input()
  phone: PhoneModel;
}
