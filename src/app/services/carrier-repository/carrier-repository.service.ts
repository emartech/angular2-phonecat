import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CarrierRepositoryService {

  constructor(private http: Http) {}

  getAll() {
    return this.http
      .get('api/carriers.json').toPromise()
      .then((response) => response.json());
  }
}
