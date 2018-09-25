import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PropertyListPage } from '../property-list/property-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slider: Slides;
  slideIndex = 0;
  slides = [
    {
      title: 'Welcome to FijiHomes',
      imageUrl: 'assets/imgs/started.jpg',
      description: 'Best homes around fiji',
    }]

  constructor(public menu: MenuController,
    public storage: Storage,public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  goToHome() {
    this.navCtrl.setRoot(PropertyListPage).then(() => {
      this.storage.set('haSeenTutorial', 'true');
    })
  }

}
