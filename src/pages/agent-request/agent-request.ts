import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the AgentRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-request',
  templateUrl: 'agent-request.html',
})
export class AgentRequestPage {
  use:any;
  s:any;
  t:any;
  u:any;
  r:any;
  send = {key:"fj55518",agent_id:''};
  request={key:"fj55518",status:'',property:''};
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams) {
    this.use =JSON.parse(localStorage.getItem('userdata'));
    this.send.agent_id = this.use.id;
    console.log(this.send.agent_id);
    let headers = new Headers();
   //retrival of pending requests
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allagentpendingproperties', this.send, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.r = data.data;
        console.log(this.r);
      }, (err) =>{
        console.log("error encounted while requesting for Agents Liable Property Pending");
       });

       //retrival of approved requets
       this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/allagentactiveproperties', this.send, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.s = data.data;
        console.log(this.s);
      }, (err) =>{
        console.log("error encounted while requesting for Agents Liable Property Approved");
       });
       //retrival of Removed Properties
       this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/allagentnotactiveproperties', this.send, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.t = data.data;
        console.log(this.t);
      }, (err) =>{
        console.log("error encounted while requesting for Agents Liable Property");
       });

       //retieval of Rented Properties
       this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/allagentrentedproperties', this.send, {headers: headers}).map(res => res.json()).subscribe(
        data => {
          this.u = data.data;
          console.log(this.u);
        }, (err) =>{
          console.log("error encounted while requesting for Agents Liable Property");
         });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestsPage');
  }
  Approve(r:any){
    console.log(r.property_id);
    //to update the status of the property to Active
    this.request.status="active";
    this.request.property=r.property_id;
    let headers = new Headers();
    this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.r = data.data;
        console.log(this.r);
      }, (err) =>{
        console.log("error encounted while setting property status to active");
       });
  }
  Remove(r:any)
  {
    console.log(r.property_id);
    //to update the status of the property to Inactive
    this.request.status="notactive";
    this.request.property=r.property_id;
    let headers = new Headers();
    this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.r = data.data;
        console.log(this.r);
      }, (err) =>{
        console.log("error encounted while setting property status to notactive");
       });
  }

  Rented(s:any)
  {
    console.log(s.property_id);
    //to update the status of the property to Rented
    this.request.status="rented";
    this.request.property=s.property_id;
    let headers = new Headers();
    this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.s = data.data;
        console.log(this.s);
      }, (err) =>{
        console.log("error encounted while setting property status to rented");
       });
  }
  
  Reactivate(t:any)
  {
    console.log(t.property_id);
    //to update the status of the property to active
    this.request.status="pending";
    this.request.property=t.property_id;
    let headers = new Headers();
    this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.t = data.data;
        console.log(this.t);
      }, (err) =>{
        console.log("error encounted while setting property status to pending");
       });
  }
  Repost(u:any){
    this.request.status="active";
    this.request.property=u.property_id;
    let headers = new Headers();
    this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/setpropertystatus', this.request, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.u = data.data;
        console.log(this.u);
      }, (err) =>{
        console.log("error encounted while setting property status to active");
       });
  }

}
