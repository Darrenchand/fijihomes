import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { PropertyDetailPage } from '../property-detail/property-detail';
import 'rxjs/add/operator/map';
/**
 * Generated class for the PropertyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-property-list',
  templateUrl: 'property-list.html',
})
export class PropertyListPage {
resutl:any;
pic:any;
send = {key:"fj55518"};
searchKey: string = "";
selectedchoice:string;
back:any;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  
    let headers = new Headers();
      this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allproperties', this.send, {headers: headers}).map(res => res.json()).subscribe(
        data => {
          this.resutl = data.data;
          this.back = data.data;
          localStorage.setItem('maphouse',JSON.stringify(this.resutl));
          console.log(this.resutl)
        }, (err) =>{
          console.log("error");
         });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyListPage');
  }

  findByPrice(searchKey: string) {
    this.resutl = this.back;
    let key: string = searchKey;
    return Promise.resolve(this.resutl.filter((property: any) =>
        (property.price).indexOf(key) > -1));
  }

  findBylocation(searchKey: string) {
    this.resutl = this.back;
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(this.resutl.filter((property: any) =>
        (property.location).toUpperCase().indexOf(key) > -1));
  }

  findBybedrooms(searchKey: string) {
    this.resutl = this.back;
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(this.resutl.filter((property: any) =>
        (property.num_bedroom).toUpperCase().indexOf(key) > -1));
  }

  findBytype(searchKey: string) {
    this.resutl = this.back;
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(this.resutl.filter((property: any) =>
        (property.type).toUpperCase().indexOf(key) > -1));
  }

  onInput(event) {
    if(this.selectedchoice=="price")
    {
      this.findByPrice(this.searchKey)
      .then(data => {
        console.log(data);
        this.resutl = data;

      })
      .catch(error => alert(JSON.stringify(error)));
    }
    else if(this.selectedchoice=="Location")
    {
      this.findBylocation(this.searchKey)
      .then(data => {
        console.log(data);
        this.resutl = data;

      })
      .catch(error => alert(JSON.stringify(error)));

    }
    else if(this.selectedchoice=="Bedrooms")
    {

      this.findBybedrooms(this.searchKey)
      .then(data => {
        console.log(data);
        this.resutl = data;

      })
      .catch(error => alert(JSON.stringify(error)));
    }
    else if(this.selectedchoice=="type")
    {
      this.findBytype(this.searchKey)
      .then(data => {
        console.log(data);
        this.resutl = data;

      })
      .catch(error => alert(JSON.stringify(error)));

    }
   
}

  housedetail(house:any){
    this.navCtrl.push(PropertyDetailPage,{house:house});
  }
      
  

}
