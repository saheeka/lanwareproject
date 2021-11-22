import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  products:any[]=[]
  constructor( private ds:DataService, private router:Router) {

    
   }

  ngOnInit(): void {

    
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
  
}
