import { Component, Output, EventEmitter } from '@angular/core';

import { CarrierRepositoryService } from '../../services/carrier-repository/carrier-repository.service';

@Component({
  selector: 'carrier-select',
  templateUrl: 'carrier-select.tpl.html'
})
export class CarrierSelectComponent {

  public carriers: Array<any>;

  @Output()
  onSelect = new EventEmitter();

  constructor(private carrierRepository: CarrierRepositoryService) {
    this.carriers = [];
  }

  select(carrier) {
    this.onSelect.emit(carrier);
  }

  ngOnInit() {
    this.carrierRepository
      .getAll()
      .then((carriers) => this.carriers = carriers);
  }
}
