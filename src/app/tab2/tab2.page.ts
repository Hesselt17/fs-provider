import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { listing } from '../models/listings.models';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

currLst = new listing();

  constructor(
    private navCtrl: NavController,
    private httpClient : HttpClient
  ) {
    this.currLst.userID = Number(localStorage.getItem("user_id"));
    console.log(this.currLst);

  }

  genLst(){
    console.log(this.currLst);
    this.httpClient.post("http://localhost:3000/api/property/genLst", this.currLst) //need to express path in api
    .subscribe(
      (response : any) => {
        console.log(response);
        alert("Successfully created new rental");
      },
      err => {
        console.log(err);
          alert("Failed to Create Rental");
      });
      console.log(this.currLst);
  }

}
