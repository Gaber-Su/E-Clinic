import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {provideAnimations} from "@angular/platform-browser/animations"

import { routes } from './app.routes';
import { AppTranslateModule } from './shared/modules/app-translate.module';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({anchorScrolling : 'enabled', scrollPositionRestoration : 'enabled'})), provideAnimations(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(AppTranslateModule.forRoot()),

  ]
};
