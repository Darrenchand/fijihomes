import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { NgForm } from '@angular/forms';
import { PropertyListPage } from '../property-list/property-list';
import { Events } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signup: UserOptions = { email: '',
    password: '',
    first_name: '',
    last_name: '',
    pic_url:'' };

    sendd ={key:"fj55518",email:'',password:'',firstname:'',lastname:'',role:'user'};

  check = true;
  userdata:any;
  check2=true;
  backgrounds = [
    'assets/imgs/background/background-1.jpg',
    'assets/imgs/background/background-5.jpg',
    'assets/imgs/background/background-3.jpg',
    'assets/imgs/background/background-4.jpg'
  ];

  constructor(public events: Events,public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  onSignup() {
    if(this.signup.email.length <= 0 && this.signup.password.length <=0)
    {
      this.check = false;
      this.check2=false

    }
    else if(this.signup.email.length <= 0)
    {
      this.check = false;

    }
    else if(this.signup.password.length <= 0)
    {
      this.check2 = false;

    }
    else if(this.signup.email.length > 3 && this.signup.password.length > 5)
    {
      this.check = true;
      this.check2 =true;
      this.sendd.email = this.signup.email;
     this.sendd.password = this.signup.password;
     this.sendd.firstname = this.signup.first_name;
     this.sendd.lastname = this.signup.last_name;

     console.log(this.sendd);
      let headers = new Headers();
      this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/signup',this.sendd, {headers: headers}).map(res => res.json()).subscribe(
        data => {
          this.userdata = data;
          
          if(this.userdata.code ===1)
          {
            
            localStorage.setItem('userdata',JSON.stringify(this.userdata.userdata));
            this.navCtrl.setRoot(LoginPage);
            console.log(this.userdata);
          }
          
        }, (err) =>{
          console.log("error");
         });
    
    }
    else{
      
    }

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
