import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  users:any[]=[]
  products:any[]=[]
  name=""
  price=""
  desc=""
  constructor( private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  
  
  viewuser(){
    this.ds.viewuser()
    .subscribe((result:any)=>{
      if(result){
        
       console.log(result );
       
this.users=result.users

      }
    },
    (result:any)=>{
      alert(result.error.message)
    })
  }

  viewproduct(){
    this.ds.viewproduct()
    .subscribe((result:any)=>{
      if(result){
        
       console.log(result );
       
this.products=result.products

      }
    },
    (result:any)=>{
      alert(result.error.message)
    })
  }

  addproduct(){
    //var id= this.id
    var name=this.name
    var price=this.price
    var desc=this.desc
    
    this.ds.addproduct(name,price,desc)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
    // this.reminders.push({
    //   id:this.reminders.length,
    //   Event:event,
    //   Note:note
    //   //Date:date
    // })
    console.log(this.products);   
  }

}
