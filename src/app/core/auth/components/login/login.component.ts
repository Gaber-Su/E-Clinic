import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormControlService } from '../../services/form-control.service';
import {  IAuthResponse } from '../../auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends FormControlService implements OnInit {
 
  loginForm!:FormGroup;

  constructor(private _auth:AuthService, private _fb:FormBuilder, private router: Router) {
    super();
  }
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      userName : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  
  login(){
    /** mark inputs as touched regardless user take action  */
    this.loginForm.markAllAsTouched();
    console.log(this.loginForm);
    
    if (this.loginForm.invalid) return;
    
    
    this._auth.authenticate(this.loginForm.get('userName')?.value,this.loginForm.get('password')?.value )
    .subscribe({
      next: (response: IAuthResponse) => {
        this._auth.storeTokens({access_token : response.access_token})
        this.router.navigateByUrl('/index/Dashboard',)

        
      },
      error: (error) => {
        console.error('Login failed', error);
        // Handle login error (e.g., display an error message)
      },
    });
  }




  }



