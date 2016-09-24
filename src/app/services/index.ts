import { PhoneRepositoryService } from './phone-repository/phone-repository.service';
import { FilteredPhoneListService } from './filtered-phone-list/filtered-phone-list.service';
import { CarrierRepositoryService } from './carrier-repository/carrier-repository.service';

export const PROVIDERS = [PhoneRepositoryService, FilteredPhoneListService, CarrierRepositoryService];
