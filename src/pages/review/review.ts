import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {
value1:any;
use:any;
userdata:any;
s:any;
getusers = {key:"fj55518",user:''};
submittext={key:"fj55518",property:'',review:'',rating:'',user:''};
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController ,) {
    this.use =JSON.parse(localStorage.getItem('userdata'));
    this.getusers.user = this.use.id;
    let headers = new Headers();
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/getpropertypeople', this.getusers, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.userdata = data.data;
        console.log(this.userdata)
      }, (err) =>{
        console.log("error while fetching the My Property to Review");
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }
  starClicked(value){
    this.value1=value;
    console.log("Rated :", value);
 }
 submited(propertyid:any,text:any){
  let headers = new Headers();
  this.submittext.property=propertyid;
  this.submittext.review=text;
  this.submittext.rating=this.value1;
  this.submittext.user = this.use.id;
  console.log();
  this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/customerreviews', this.submittext, {headers: headers}).map(res => res.json()).subscribe(
    data => {
      this.s = data;
     // console.log(this.s)
     this.presentToast();
    }, (err) =>{
      console.log("error while executing Submit Review");
     });

 }
 presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Review Added Sucessfully',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
}
