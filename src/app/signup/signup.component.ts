import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private _authS:AuthService , private _router:Router){}
  signupForms:FormGroup = new FormGroup({
    name: new FormControl (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    email: new FormControl (null , [Validators.email , Validators.required] ),
    password: new FormControl (null , [Validators.required , Validators.pattern(/[A-Z][a-z]{6,8}/)]),
    rePassword: new FormControl (null , [Validators.required , Validators.pattern(/[A-Z][a-z]{6,8}/)]),
    phone: new FormControl (null , [Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })
  handelSubmit(){
    if(!this.signupForms.valid) return;
    console.log(this.signupForms.value);

    this._authS.signup(this.signupForms.value).subscribe({
      next:(data)=>{
        if(data.message == "success"){
          this._router.navigate(['/login'])
        }
      },
      error:(error)=>{
        console.log(error);
        
        if (error.error.message ==="Account Already Exists"){
          
        }
      }
    })
  
    
  }
}
