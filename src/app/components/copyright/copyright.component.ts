import { Component, Inject } from '@angular/core';

@Component({
  selector: 'copyright',
  templateUrl: 'copyright.tpl.html'
})
export class CopyrightComponent {

  constructor(@Inject('ACTUAL_YEAR') public actualYear: any) {}
}
