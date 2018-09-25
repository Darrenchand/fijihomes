import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http, Headers} from '@angular/http';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  user:any;
  firstname:any;
  lastname:any;
  email:any;
  phone:any;
  password:any;
  description:any;
  address:any;
  bank:any;
  linkedin:any;
 dob:any;
  coverImage:any = 'assets/imgs/background/background-1.jpg';
  se ={key:"fj55518",firstname:'',lastname:'',email:'',phone:'',password:'',description:'',address:'',bank:'',linkedin:'',dob:''};
  constructor(public http:Http,public alerCtrl: AlertController,public events: Events,public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {

    this.user = JSON.parse(localStorage.getItem('userdata'));
    this.firstname=this.user.first_name;
    this.lastname=this.user.last_name;
    this.email=this.user.email;
    this.phone=this.user.phone;
    this.password=this.user.password;
    this.description=this.user.description;
    this.address=this.user.address;
    this.bank=this.user.bank_acc_number;
    this.linkedin=this.user.linkedin;
    this.dob=this.user.dob;
    console.log(JSON.parse(localStorage.getItem('userdata')));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  logout()
  {
    this.events.publish('user:logout');
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
    
  }

  Savechanges(){
    this.se.firstname=this.firstname;
    this.se.lastname=this.lastname;
    this.se.email=this.email;
    this.se.phone=this.phone;
    this.se.password=this.password;
    this.se.description=this.description;
    this.se.address=this.address;
    this.se.bank=this.bank;
    this.se.linkedin=this.linkedin;
    this.se.dob=this.dob;
      let headers = new Headers();
      this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/updateuser',this.se, {headers: headers}).map(res => res.json()).subscribe(
        data => {
          //this.user = data;
          this.user.first_name=this.firstname;
          this.user.last_name =this.lastname;
          this.user.email=this.email;
          this.user.phone=this.phone;
          this.user.password=this.password;
          this.user.description=this.description;
          this.user.address=this.address;
          this.user.bank_acc_number=this.bank;
          this.user.linkedin=this.linkedin;
          this.user.dob=this.dob;
          localStorage.setItem('userdata',JSON.stringify(this.user));

          console.log(data);
          this.doAlert();
     }, (err) =>{
      console.log("error");
     });
    }
    doAlert() {
      let alert = this.alerCtrl.create({
        title: 'Successful',
        message: 'The changes has been sucesssfully changed. Thankyou',
        buttons: [
          {
            text: 'OK',
            role: 'ok',
            handler: () => {
              
            }
          }
        ]
        
      });
      alert.present()
  }

}
