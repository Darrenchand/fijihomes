import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the AgentAddtimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-addtime',
  templateUrl: 'agent-addtime.html',
})
export class AgentAddtimePage {

  use:any;
  r:any;
  s:any;
  send = {agent:'',key:"fj55518"};
  request={key:"fj55518",property:''};
  resend={key:"fj55518",agent:''};
 // request={key:"fj55518",status:'',property:''};
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams) {
    this.use =JSON.parse(localStorage.getItem('userdata'));
    this.send.agent = this.use.id;
    console.log(this.send.agent);
    let headers = new Headers();
   //retrival of pending requests
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/getinterestedproperties', this.send, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.r = data.data;
        console.log(this.r);
      }, (err) =>{
        console.log("error encounted while requesting for Interested Noted properties For Particular Agent");
       });
      
       this.resend.agent=this.use.id;
       console.log(this.resend.agent);
       this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/getopenhomeschedule', this.resend, {headers: headers}).map(res => res.json()).subscribe(
        data => {
          this.s = data.schedule;
          console.log(this.s);
        }, (err) =>{
          console.log("error encounted while checking for open home schedules");
         });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenhousePage');
  }
  Request(r:any){
    console.log(r.property_id);
    this.request.property=r.property_id;
    let headers = new Headers();
    this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/requestOpenHomeTime', this.request, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.r = data.data;
        console.log(this.r);
        
      }, (err) =>{
        console.log("error encounted while requesting for open_house_time");
       });
  }
}
