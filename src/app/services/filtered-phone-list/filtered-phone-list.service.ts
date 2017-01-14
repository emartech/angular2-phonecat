import { Injectable } from '@angular/core';

import { PhoneRepositoryService } from '../phone-repository/phone-repository.service';

@Injectable()
export class FilteredPhoneListService {

  private phones: any[];
  private allPhones: any[];
  private searchText: String;
  private selectedCarrier: String;

  constructor(private phoneRepository: PhoneRepositoryService) {
    this.phoneRepository = phoneRepository;

    this.allPhones = [];
    this.phones = [];
    this.searchText = '';
    this.selectedCarrier = '';
  }

  load() {
    this.phoneRepository
      .getAll()
      .then((phones) => this.phones = this.allPhones = phones);
  }

  getAll() {
    return this.phones;
  }

  hasAny() {
    return this.phones.length > 0;
  }

  setSelectedCarrier(carrier) {
    this.selectedCarrier = carrier;
    this._filterPhones();
  }

  setSearchText(value) {
    this.searchText = value;
    this._filterPhones();
  }

  _filterPhones() {
    this.phones = this.allPhones.filter((phone) => {
      return this._filterName(phone) && this._filterCarrier(phone);
    });
  }

  _filterName(phone) {
    return !this.searchText || phone.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }

  _filterCarrier(phone) {
    return !this.selectedCarrier || phone.carrier.toLowerCase() === this.selectedCarrier.toLowerCase();
  }
}
