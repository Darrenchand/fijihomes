import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { PropertyDetailPage } from '../property-detail/property-detail';

/**
 * Generated class for the MyHousesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-houses',
  templateUrl: 'my-houses.html',
})
export class MyHousesPage {

  mylist:any;
  s = {key:"fj55518",userid:''};
  del = {key:"fj55518",buyer:'',property:''};
  use:any;
  res:any;
  reply:any;
  hide:boolean;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.use =JSON.parse(localStorage.getItem('userdata'));
    this.s.userid = this.use.id;
    this.del.buyer = this.use.id;
    console.log(this.s.userid);
    let headers = new Headers();
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/userinterestedpropertiesinfo',this.s, {headers: headers}).map(res => res.json()).subscribe(
          data => {
            this.res = data.data;
            console.log(this.res);
            console.log("checking");
            if(this.res.length > 0)
            {
              this.hide = true;
            }
            else{
              this.hide = false;
            }
            
             
            
          }, (err) =>{
            console.log("user intere error");
           });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyHousesPage');
  }

  view(mine:any)
  {
    this.navCtrl.push(PropertyDetailPage,{house:mine});
  }

  remove(row:any)
  {
    this.del.property=row.id; 
      let headers = new Headers();
      this.http.post('http://localhost:1337/uninvested-stocks.000webhostapp.com/api/v1/notinterested',this.del, {headers: headers}).map(res => res.json()).subscribe(
            data => {
              this.reply = data;
              console.log(this.reply);
              const index: number = this.res.indexOf(row);
              console.log(index);
              if (index !== -1) {
              this.res.splice(index, 1);
              console.log("removed");
              } 
            }, (err) =>{
              console.log("remove error");
             });     
  }

}
