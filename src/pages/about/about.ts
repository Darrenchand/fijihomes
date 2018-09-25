import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';
import { PopoverController } from 'ionic-angular';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  // AboutItems = [
  //   {title: 'History', text: 'FijiHomes Started Way Back in the 1970. This Website was made just This Year 2018 to accomodate the growing needs of the customers',image: "assets/img/history.png"},
  //   {title: 'Contact Us', text: 'You Can Call Us on: +6799668863 OR you can drop an email at s11120422@student.usp.ac.fj. ThankYou',image: "assets/img/contact.png"},
  //   {title: 'Looking For a Job?', text: 'We are now Hiring Agents for broker jobs. Drop in ur CV at the latest on the Email Provided.',image: "assets/img/lookingforjob.png"}
  // ];
  constructor(public popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams) {
   
  }
  // backgrounds = [
  //   'assets/imgs/background/background-1.jpg',
  //   'assets/imgs/background/background-2.jpg',
  //   'assets/imgs/background/background-3.jpg',
  //   'assets/imgs/background/background-4.jpg'
  // ];
  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
}
