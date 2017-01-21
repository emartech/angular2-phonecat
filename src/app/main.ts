import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '../style/app.css';

import { MainModule } from './modules/main.module';

platformBrowserDynamic().bootstrapModule(MainModule);
