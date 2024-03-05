import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { PasswordService } from '../password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private _PasswordService:PasswordService , private _Router:Router){}
  input1:boolean=true;
  input2:boolean=false;
  input3:boolean=false;
  email:string=''

  forgotForme:FormGroup=new FormGroup({
    email:new FormControl(null , [Validators.email , Validators.required])
  })


  ResetCode:FormGroup=new FormGroup({
    resetCode:new FormControl('')
  })

  ResetPassword:FormGroup=new FormGroup({
    newPassword:new FormControl(null , [Validators.required , Validators.pattern(/[A-Z][a-z]{6,8}/)])
  })

  forgotPasswords():void{
    let userEmails =this.forgotForme.value;
    this.email=userEmails.email
    this._PasswordService.forgotPassword(userEmails).subscribe({
      next:(response)=>{
        console.log(response);
        this.input1=false;
        this.input2=true;
        
      }
    })
  }

  resetCode():void{
    let resetCode=this.ResetCode.value
    this._PasswordService.resetCode(resetCode).subscribe({
      next:(response)=>{
        console.log(response);
        this.input2=false;
        this.input3=true;
      }
    })
  }

  resetPassword():void{
    let resetpassword=this.ResetPassword.value
    resetpassword.email=this.email
    this._PasswordService.resetPassword(resetpassword).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.token){
          localStorage.setItem('token' , response.token)
          this._Router.navigate(['/Home'])
        }
        
      }
    })

  }
}
