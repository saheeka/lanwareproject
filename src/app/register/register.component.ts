import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

uname=""
password=""
email=""
phone=""
registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  email:['']

})



  constructor( private ds:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
   register(){
    var uname=this.registerForm.value.uname
    var email=this.registerForm.value.email
    var pwd=this.registerForm.value.password
    var phone=this.registerForm.value.phone
    if(this.registerForm.valid)
    {
    this.ds.register( uname,email,pwd, phone)
    .subscribe((result:any)=>{
      if (result){
        alert(result.message)
        
        //alert("successfully registered")
        this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.error.message)
    
      // else{
      //   alert("user already exist..!!!")
      // }
    })
    
  }
  else{
    alert("invalid form")
  }
}

  

}
