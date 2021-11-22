import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
email=""
password=""

adminloginForm=this.fb.group({
    
  email:[''],
  password:['']
  

})

  constructor( private router:Router, private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  adminlogin(){

  var ademail=this.adminloginForm.value.email
  var pwd=this.adminloginForm.value.password
  if(this.adminloginForm.valid){
  this.ds.login(ademail,pwd)
  .subscribe((result:any)=>{
      if(result)
      {
       
        alert(result.message)
        this.router.navigateByUrl("adminhome")
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
