import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {provideAnimations} from "@angular/platform-browser/animations"

import { routes } from './app.routes';
import { AppTranslateModule } from './shared/modules/app-translate.module';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './core/interceptors/headers.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import  CoreInterceptors  from './core/interceptors/interceptor.index';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({anchorScrolling : 'enabled', scrollPositionRestoration : 'enabled'})), provideAnimations(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(AppTranslateModule.forRoot()),
    provideHttpClient(withInterceptors(CoreInterceptors)),
    
  ]
};
