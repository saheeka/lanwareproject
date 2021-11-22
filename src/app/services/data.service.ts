import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const options={
  withCredential:true,
  headers:new HttpHeaders()
} 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""

  constructor( private http:HttpClient) { }

  register(uname: any, email: any, password: any,phone:any) {
    const data={
      uname,
      email,
      password,
      phone
    }
    return this.http.post("http://localhost:3000/register", data)
  }

  // getOptions(){
  //   const token=localStorage.getItem("token")
  //   let headers=new HttpHeaders()
  //     if (token)
  //   {
  //     headers=headers.append("x-access-token",token)
  //     options.headers=headers
  //   }
  //   return options
  // }
  adminlogin(ademail: any, password: any) {
    const data={
      ademail,
      password
    }
    return this.http.post('http://localhost:3000/adminlogin',data)
  }
  login(email: any, password: any) {
    const data={
      email,
      password
    }
    return this.http.post("http://localhost:3000/login",data)
}
viewuser(){
  
  return  this.http.get("http://localhost:3000/viewuser")
}
addproduct(name:any,price:any,desc:any){
  const data={
    
    name ,
    price,
    desc
  }
  return  this.http.post("http://localhost:3000/addproduct",data)
}
viewproduct(){
  
  return  this.http.get("http://localhost:3000/viewproduct")
}
}
