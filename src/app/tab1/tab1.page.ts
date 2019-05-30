import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { listing } from '../models/listings.models';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listing: Array<listing> = new Array();

  constructor(
    private navCtrl: NavController
  ) {

    let lst1 = new listing();
    lst1.address = "1600 Pennsylvania Ave.";

    let lst2 = new listing();
    lst2.address = "Reunion Tower";

    this.listing.push(lst1);
    this.listing.push(lst2);

  }

  navToTab1() {
    this.navCtrl.navigateForward("main/tabs/tab1");
  }

}
