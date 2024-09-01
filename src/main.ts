import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';
// registerLicense(
//   'Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhBYVFwWmFZfVpgfV9GZVZVQWYuP1ZhSXxXdk1iUH9XcHFRQ2VaUk0='
// );

// debugger;
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
