import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { listing } from '../models/listings.models';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public listings : Array<listing> = [];

  constructor(
    private navCtrl: NavController,
    private lstService: ListingService
  ){

    this.lstService.getAllListings();
    this.listings = this.lstService.listings;

  }

  updateR(lst : listing){
    this.navCtrl.navigateForward("update", {
      queryParams: {
        q: "ionic",
        address: lst.address,
        lstID : lst.id
      }
    });
  }

}

