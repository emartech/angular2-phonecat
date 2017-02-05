import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import '../style/app.css';

import { MainModule } from './modules/main.module';

if (ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(MainModule);
