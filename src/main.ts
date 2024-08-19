import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {registerLicense} from "@syncfusion/ej2-base"
registerLicense('ORg4AjUWIQA/Gnt2U1hhQlJBfVZdXGtWfFN0QXNcdV5zflRPcC0sT3RfQFljQX9adkBnW3pYdHRcRA==');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
