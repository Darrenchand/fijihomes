import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the MypropertiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myproperties',
  templateUrl: 'myproperties.html',
})
export class MypropertiesPage {

  use:any;
  r:any;
  send = {key:"fj55518",userid:''};
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams) {
    this.use =JSON.parse(localStorage.getItem('userdata'));
    this.send.userid = this.use.id;
    let headers = new Headers();
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allownerproperties', this.send, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.r = data.data;
        console.log(this.r)
      }, (err) =>{
        console.log("error");
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypropertiesPage');
  }

}
