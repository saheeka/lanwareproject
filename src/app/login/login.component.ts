import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email=""
password=""

  loginForm=this.fb.group({
    
    email:[''],
    password:['']
    
  
  })

  constructor( private router:Router,private fb:FormBuilder, private ds:DataService) { }

  ngOnInit(): void {
  }
  





  login(){
    var email=this.loginForm.value.email
    var pwd=this.loginForm.value.password
    if(this.loginForm.valid){
    this.ds.login(email,pwd)
    .subscribe((result:any)=>{
        if(result)
        {
        //   localStorage.setItem("token",result.token)
        //  localStorage.setItem("currentUser",result.currentUser)
        //   localStorage.setItem("currentAcc",email)
          alert(result.message)
          this.router.navigateByUrl("userhome")
        }
        },
        (result)=>{
          alert(result.error.message)
        }
    )
  }
  else{
      alert("Invalid form")
  }

  }
  

}
