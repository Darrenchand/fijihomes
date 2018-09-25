import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { PropertyListPage } from '../property-list/property-list';
import { UserOptions } from '../../interfaces/user-options';
import { Http, Headers } from '@angular/http';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  login: UserOptions = {  email: '',
  password: '',
  first_name: '',
  last_name: '',
  pic_url:'' };
  check = true;
  check2=true;
  userdata:any;
  send ={key:"fj55518",email:'',password:''};
  backgrounds = [
    'assets/imgs/background/background-1.jpg',
    'assets/imgs/background/background-5.jpg',
    'assets/imgs/background/background-3.jpg',
    'assets/imgs/background/background-4.jpg'
  ];

  constructor(public storage: Storage,public events: Events,public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogin() {
    if(this.login.email.length <= 0 && this.login.password.length <=0)
    {
      this.check = false;
      this.check2=false

    }
    else if(this.login.email.length <= 0)
    {
      this.check = false;

    }
    else if(this.login.password.length <= 0)
    {
      this.check2 = false;

    }
    else if(this.login.email.length > 3 && this.login.password.length > 5)
    {
      this.check = true;
      this.check2 =true;
      //this.userData.signup(this.login.email);
    
     this.send.email = this.login.email;
     this.send.password = this.login.password;

      let headers = new Headers();
      this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/login', this.send, {headers: headers}).map(res => res.json()).subscribe(
        data => {
          this.userdata = data;

        if(this.userdata.code == '1')
        {
          if(this.userdata.userdata.role =='user')
          {
            localStorage.setItem('userdata',JSON.stringify(this.userdata.userdata));
            this.events.publish('user:login');
            this.navCtrl.setRoot(PropertyListPage);
            console.log("user",this.userdata.userdata);
          }
          else if(this.userdata.userdata.role=='agent'){
            localStorage.setItem('userdata',JSON.stringify(this.userdata.userdata));
            this.events.publish('agent:login');
            this.navCtrl.setRoot(PropertyListPage);
            console.log("agent",this.userdata.userdata);
          }

        }
          else{
            console.log("didnt match",this.userdata);
          }
        }, (err) =>{
          console.log("error");
         });
    
    }
    else{
      
    }

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
