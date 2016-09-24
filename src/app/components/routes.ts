import { PhoneListAppComponent } from './phone-list-app/phone-list-app.component';
import { PhoneAppComponent } from './phone-app/phone-app.component';

export let routes = [
  { path: '', component: PhoneListAppComponent, pathMatch: 'full' },
  { path: 'phone/:phoneId', component: PhoneAppComponent }
];
