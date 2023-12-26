import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, enableProdMode } from '@angular/core';
import { environment } from './environment/environment';
import { AppModule } from './app/app.module';

// ...

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  