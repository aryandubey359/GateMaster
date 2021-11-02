import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  msg;
  res;
  otp_msg;
  err = false;
  emailerr = false;
  otp_page = false;
  constructor(private http: HttpClient) { }

  onSubmit(data) {
    console.log("sgpa generating....")
    return this.http.post("http://127.0.0.1:8000/registration/", data.value).subscribe((result) => {
      console.log("sgpa genereted....")
      this.res = result
      this.msg = this.res.msg
      if(this.msg == "Wrong Password") this.err = true;
      if(this.msg == "User Registered Successfully") this.otp_page = true;
      if(this.msg == "Email Already Exist") this.emailerr = true;
      console.log(this.otp_page)

      console.log(this.msg)
    })
  }

  sendOTP(data){
    console.log("otp generating....")
    return this.http.post("http://127.0.0.1:8000/otp/", data.value).subscribe((result) => {
      console.log("otp genereted....")
      this.res = result
      this.otp_msg = this.res.msg
      console.log(this.otp_page)
      console.log(this.otp_msg)
      location.replace('home/')
    })
  }

  ngOnInit(): void {
  }

}
