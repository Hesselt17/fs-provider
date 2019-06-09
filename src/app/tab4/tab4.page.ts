import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { listing } from '../models/listings.models';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  //public listings : Array<listing> = [];

  constructor(
    private navCtrl: NavController,
    private lstService: ListingService
  ){

    //this.lstService.getAllListings();
    //this.listings = this.lstService.listings;

  }

}

