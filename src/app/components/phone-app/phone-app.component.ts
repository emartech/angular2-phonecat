import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhoneRepositoryService } from '../../services/phone-repository/phone-repository.service';

@Component({
  selector: 'phone-app',
  templateUrl: 'phone-app.tpl.html'
})
export class PhoneAppComponent {

  public phone: any;

  constructor(private routeParams: ActivatedRoute, private phoneRepository: PhoneRepositoryService) {
    this.phone = {
      images: [],
      battery: {},
      storage: {},
      hardware: {}
    };
  }

  ngOnInit() {
    this.routeParams.params
      .map((params: any) => params.phoneId)
      .subscribe((phoneId) => {
        this.phoneRepository
          .getOne(phoneId)
          .then((phone) => this.phone = phone);
      });
  }
}
