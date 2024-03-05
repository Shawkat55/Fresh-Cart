import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoding:boolean=false;
  errorMsg ="";
  constructor(private _authS:AuthService , private _router:Router){}
  loginform:FormGroup = new FormGroup({
  email: new FormControl (null , [Validators.email , Validators.required] ),
  password: new FormControl (null , [Validators.required , Validators.pattern(/[A-Z][a-z]{6,8}/)]),
  
})
loginFn(loginform:any){
  this.isLoding=true;
  if(loginform.valid)
  this._authS.login(loginform.value).subscribe({

next:(response)=>{
  this.isLoding=false;
  console.log(response);
  if(response.message="success"){
    localStorage.setItem('token' , response.token);
    this._authS.decodedToken();
    this._router.navigate(['/Home'])
  }   
},
error:(error)=>{
  this.isLoding=false;
  if(error.error.statusMsg ==='fail'){
  
    this.errorMsg=error.error.message
  }
  console.log(error);
  
}

})
}
}
