import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the AllreviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allreviews',
  templateUrl: 'allreviews.html',
})
export class AllreviewsPage {
  send = {key:"fj55518",agent:''};
  resend = {key:"fj55518",agent:''};
  use:any;
  resut:any;
  result:any;
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams) {
    let headers=new Headers();
    this.use =JSON.parse(localStorage.getItem('userdata'));
    this.send.agent = this.use.id;
    this.resend.agent=this.use.id;
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/agentgetreviews', this.send, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.resut = data.data.tenantreviews;
        console.log(this.resut);
      }, (err) =>{
        console.log("error in getting tenant reveiws");
       });
       this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/agentgetreviews', this.resend, {headers: headers}).map(res => res.json()).subscribe(
        data => {
          this.result = data.data.ownerreviews;
          console.log(this.result);
        }, (err) =>{
          console.log("error in getting owner reviews");
         });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllreviewsPage');
  }

}
