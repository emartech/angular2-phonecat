import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { PROVIDERS } from './services';
import { PIPES } from './pipes';
import { COMPONENTS } from './components';
import { routes } from './components/routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    PROVIDERS,
    { provide: 'ACTUAL_YEAR', useValue: 2016 }
  ]
})
export class MainModule {}
