import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
/**
 * Generated class for the CodegeneratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-codegenerator',
  templateUrl: 'codegenerator.html',
})
export class CodegeneratorPage {
  use:any;
  s:any;
  userdata:any;
  propertyem:any;
  getusers = {key:"fj55518",agent:''};
  generator={key:"fj55518",property:'',userid:''};
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    //fetch the active users for code generation
    this.use =JSON.parse(localStorage.getItem('userdata'));
    this.getusers.agent = this.use.id;
    let headers = new Headers();
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/getdetailsforcodegen', this.getusers, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.userdata = data.data;
        console.log(this.userdata)
      }, (err) =>{
        console.log("error while fetching the Active Users");
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodegeneratorPage');
  }
  GenerateCod(userid:any,propertyid:any){
    let headers = new Headers();
    this.generator.userid = userid;
    this.generator.property=propertyid;
    console.log( this.generator.property);
    console.log(this.generator.userid);
    this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/generateauthcode', this.generator, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.s = data.authcode;
        console.log(this.s)
      }, (err) =>{
        console.log("error while executing generate code");
       });
  }
}
