import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from './main.module.ngfactory';

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
