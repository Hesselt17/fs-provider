import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  currentUser = new User();

  constructor(
    private navCtrl : NavController,
    private httpClient : HttpClient
  ) { 

  }

  ngOnInit() {
  }

  Register(){
    this.httpClient.post("http://localhost:3000/api/reg", this.currentUser) //need to express path in api
    .subscribe(
      (response : any) => {
        console.log(response);
        const userID = response.id;
        localStorage.setItem("user_id", userID);
        this.navCtrl.navigateForward("/tabs/tab1", {
          queryParams: {
            user_id : userID
          }
        });
      },
      err => {
        const errorMess= err['error'];
        const errLen = errorMess.message.length;
        console.log(err);

        if (errLen>15 && errorMess.message.substring(0,15) == "Duplicate entry"){
          alert("Username taken");
        }
        else if (errLen>15 && errorMess.message.substring(errLen-14) == "cannot be null"){
          alert("All input fields must have an input.");
        }
        else{
          alert("Failed to Register");
        }
      });
      console.log(this.currentUser);
  }

  navToLogin(){
    this.navCtrl.navigateForward("login");
  }

}
