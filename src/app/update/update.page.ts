import { Component, OnInit } from '@angular/core';
import { listing } from '../models/listings.models';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../services/listing.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  private lstID : number;
  public address : string;
  public currentListing : listing;

  constructor(
    private activatedRoute: ActivatedRoute,
    private lstService : ListingService,
    private navCtrl : NavController
  ) {

    this.lstService.getAllListings();
    
  }

  ngOnInit() {
    let arrow = (data: any) => {
      this.address = data.params.address;
      this.lstID = data.params.lstID;

    this.currentListing = this.lstService.findLstByID(this.lstID);
    if (this.currentListing == null){
      alert("Listing Not Found!")
      this.navCtrl.navigateBack("tab1");
    }
    };

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
  }

}
