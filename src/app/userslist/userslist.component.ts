import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
user=""
  constructor( private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  edit(id:any){

  }
  remove(id:any){

  }
}
