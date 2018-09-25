import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  url = 'https://droidfiji.000webhostapp.com/stripe/tutorial1/tutorial/index.php?amount=';
  r:any;
  price:any;
 confirm = {key:"fj55518",buyer:'',property:''}
  constructor(public http: Http,private alertCtrl: AlertController,private domSanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
    this.confirm.buyer = this.navParams.get('uid');
    this.confirm.property = this.navParams.get('pid');
    this.price = this.navParams.get('price');
    this.price = this.price * 2; 
    this.r = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url+this.price+'&buyer='+this.confirm.buyer+'&property='+this.confirm.property);
    console.log(this.r);
  }

  

  ionViewDidLoad() {
   
  }

  ionViewWillLeave()
  {
  
  }

}
