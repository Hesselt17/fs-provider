import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { listing } from '../models/listings.models';
import { ListingService } from '../services/listing.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listings: Array<listing> = [];

  constructor(
    private navCtrl: NavController,
    private lstService: ListingService
  ) {

    const listingCallback = (err, Plistings) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      console.log(Plistings);
      this.listings = Plistings;
    };

    this.lstService.getAllListings(listingCallback);

  }

  navDetails(lst : listing){
    const propertyID = lst.id;
    localStorage.setItem("property_id", String(propertyID));
    this.navCtrl.navigateForward("details", {
      queryParams: {
        q: "ionic",
        lstID : lst.id
      }
    });
  }
  


}
