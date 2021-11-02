import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  res;
  msg;
  name;
  err = false;

  login(data) {
    console.log("logging in....")
    return this.http.post("http://127.0.0.1:8000/login/", data.value).subscribe((result) => {
      console.log("logged....")
      this.res = result
      this.msg = this.res.msg
      environment.name = this.res.name
      console.log(this.msg)
      console.log(environment.name)
      if (this.msg ==  "Login Successfull"){
        location.replace("home/");
      }
      else{
        this.err = true;
      }
    })
  }

  ngOnInit(): void {
  }

}
