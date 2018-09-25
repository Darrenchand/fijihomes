import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';
import { PayPage } from '../pay/pay';


@IonicPage()
@Component({
  selector: 'page-property-detail',
  templateUrl: 'property-detail.html',
})
export class PropertyDetailPage {
  estateProperty:any;
  send = {key:"fj55518",user_id:''};
  agent:any;
  myfav:any=[];
  temp:any;
  user:any;
  add:any;
  visible:boolean=true;
  login:boolean = true;

  sent = {key:"fj55518",userid:''};
  inte = {key:"fj55518",buyer:'',property:''}
  msg = {key:"fj55518",user:'',property:'',message:''}
  code = {key:"fj55518",user:'',authcode:''}



  constructor(private alertCtrl: AlertController,public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.estateProperty = this.navParams.get('house');
    console.log(this.estateProperty);
   
    this.send.user_id = this.estateProperty.agent_id;
    this.inte.property = this.estateProperty.id;
    this.msg.property = this.estateProperty.id;

  
    let headers = new Headers();
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/singleuser',this.send, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.agent = data.data;

          console.log(this.agent);
        
        
      }, (err) =>{
        console.log("agent error");
       });

       if(localStorage.getItem('userdata'))
       {
         this.login = false;
        this.user = JSON.parse(localStorage.getItem('userdata'));
        this.sent.userid = this.user.id;
        this.inte.buyer = this.user.id;
        this.msg.user = this.user.id;
         this.visible = false;
         this.code.user = this.user.id;
         console.log(this.sent.userid);
         this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/userinterestedproperties',this.sent, {headers: headers}).map(res => res.json()).subscribe(
          data => {
            this.temp = data.data;
            console.log(this.temp);
            console.log("checking");
            if(this.temp)
            {

            for (var i = 0; i < this.temp.length; i++) {
              if(this.temp[i].property === this.estateProperty.id)
              {
                this.visible = true;
              }
            }
            }         
            
          }, (err) =>{
            console.log("user intere error");
           });

       }
       else{
        this.visible = true;
       }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyDetailPage');
  }
  presentcode() {
    if(localStorage.getItem('userdata'))
    {
      let alert = this.alertCtrl.create({
        title: 'Enter Code To Rent House',
        inputs: [
          {
            name: 'Message',
            placeholder: 'Message'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Confirm',
            handler: data => {

              this.code.authcode = data.Message;
              let headers = new Headers();
              this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/verifyauthcode',this.code, {headers: headers}).map(res => res.json()).subscribe(
                data => {
                 
                  if(data.code == '1')
                  {
                    this.navCtrl.setRoot(PayPage,{uid:this.user.id,pid:this.estateProperty.id,price:this.estateProperty.price});
                    console.log(data);
                  }                  
                }, (err) =>{
                  console.log("agent error");
                 });
            
            }
          }
        ]
      });
      alert.present();

    }
    else{
      this.navCtrl.push(LoginPage);
    }
   
  }

  presentPrompt() {
    if(localStorage.getItem('userdata'))
    {
      let alert = this.alertCtrl.create({
        title: 'Enter Message',
        inputs: [
          {
            name: 'Message',
            placeholder: 'Message'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Send',
            handler: data => {
              this.msg.message = data.Message;
              console.log( this.msg);
              let headers = new Headers();
              this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/sendmessagetoagent',this.msg, {headers: headers}).map(res => res.json()).subscribe(
                data => {
                    console.log(data);
                  
                }, (err) =>{
                  console.log("agent error");
                 });
            }
          }
        ]
      });
      alert.present();
    }
    else{
      this.navCtrl.push(LoginPage);
    }
  
  }

  Addtofav()
  {
 
    // if(localStorage.getItem('marked'))
    // {
      
    //     this.myfav =JSON.parse(localStorage.getItem('marked'));
    //     this.myfav.push(this.estateProperty);
    //     localStorage.setItem('marked',JSON.stringify(this.myfav));
    //     console.log(JSON.parse(localStorage.getItem('marked')));
    //     this.visible = true;

    // }
    // else{      
    //     this.myfav.push(this.estateProperty);
    //     localStorage.setItem('marked',JSON.stringify(this.myfav));
    //     console.log(this.myfav);
    //     this.visible = true;
    //   }   

    let headers = new Headers();
    this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/interested',this.inte, {headers: headers}).map(res => res.json()).subscribe(
      data => {
        this.add = data;

          console.log(this.add);
          this.visible = true;
        
        
      }, (err) =>{
        console.log("agent error");
       });
    
  }

}
