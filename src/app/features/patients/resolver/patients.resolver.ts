import { ResolveFn } from '@angular/router';
import { PatientsModel } from '../models/patients-model';

export const patientsResolver: ResolveFn<any> = (route, state) => {
  console.log('Patients Resolver Running');
  
  return new PatientsModel({Get: '', Activate : '', Delete : ''});
};
