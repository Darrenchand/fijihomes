import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the AgentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-list',
  templateUrl: 'agent-list.html',
})
export class AgentListPage {
  send = {key:"fj55518"};
  resut:any;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    let headers = new Headers();
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allagents', this.send, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.resut = data.data;
        console.log(this.resut)
      }, (err) =>{
        console.log("error");
       });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentListPage');
  }

}
