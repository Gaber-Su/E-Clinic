import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }
  isControlRequired(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return control?.errors?.['required']??false
  }
  isControlHasError(form: any, controlName: string, validationType: string): boolean {
    const control = form.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
  
  isValidControl(form: FormGroup, controlName: string,): boolean {
    const control = form.get(controlName);
    return control?.valid && (control.dirty || control.touched) || false;
  }
  isInvalidControl(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return control?.invalid && (control.dirty || control.touched) || false;
  }
  

}
