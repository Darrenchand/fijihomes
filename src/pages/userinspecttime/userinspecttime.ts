import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import swal from 'sweetalert';
/**
 * Generated class for the UserinspecttimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userinspecttime',
  templateUrl: 'userinspecttime.html',
})
export class UserinspecttimePage {
  use:any;
  s:any;
  t:any;
  u:any;
  r:any;
  send = {key:"fj55518",email:'',id:''};
  confirmed={key:"fj55518",property:'',starttime:'',endtime:'',date:''};
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams) {
    this.use =JSON.parse(localStorage.getItem('userdata'));
    this.send.id = this.use.id;
    this.send.email=this.use.email;
    //console.log(this.send.id);
    //console.log(this.send.email);
    let headers = new Headers();
   //retrival of open house times for user
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/getpropertyinfoopenhome', this.send, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.r = data.data;
        console.log(this.r);
      }, (err) =>{
        console.log("error encounted while requesting for open house time for user");
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserinspecttimePage');
  }

  confirm(r:any,date:any, timefrom:any,timeto:any){
    console.log(r.id);
    //to update the status of the property to Active
    this.confirmed.starttime=timefrom;
    this.confirmed.endtime=timeto;
    this.confirmed.date=date;
    this.confirmed.property=r.id;
    let headers = new Headers();
    console.log(r.id," : ",timefrom," : ",timeto," : ",date);
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/setopenhometime', this.confirmed, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.r = data.data;
        console.log(this.r);
        swal({
          title: "Success",
          text: "Good Job Mate",
          icon: "success",
        });
      }, (err) =>{
        console.log("error encounted while setting property status to active");
       });
  }



}
