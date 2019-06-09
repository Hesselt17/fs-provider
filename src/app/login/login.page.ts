import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = "";
  public password: string = ""; 

  constructor(
    private navCtrl: NavController,
    private httpClient : HttpClient
  ) { }

  ngOnInit() {
  }

  Login(){
    const authReq = {
      email: this.email,
      password: this.password
    };
    this.httpClient.post("http://localhost:3000/api/auth", authReq) //need to express path in api
    .subscribe(
      (response : any) => {
        const userID = response.id;
        localStorage.setItem("user_id", userID);
        this.navCtrl.navigateForward("tabs/tab1", {
          queryParams: {
            user_id : userID
          }
        });
      },
      err => {
        alert("Failed to login");
      });
  }

  login(){
    this.navCtrl.navigateForward("main/tabs/tab1")
  }

}
