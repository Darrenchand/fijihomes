import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController,NavParams,ToastController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';
const URL = 'http://droidfiji.000webhostapp.com/PHP-Slim-Restful/up.php';

@IonicPage()
@Component({
  selector: 'page-submit-house',
  templateUrl: 'submit-house.html',
})
export class SubmitHousePage {

  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  
    getagent = {key:"fj55518"};
    agentform:any;
    selectedvalue:number;
    slideOneForm: FormGroup;
    uploadFile: any;
    postId: number;
    selectedfile=null;
    agentforms:any;

    title:any;
    location:any;
    price:any;
    description:any;
    numbedroom:any;
    numwashroom:any;
    numshower:any;
    carpark:any;
    agent:any;
    user:any;
    type:any;
    
    constructor(public toastCtrl: ToastController,public loadingCtrl: LoadingController,public formBuilder: FormBuilder,public http: Http,public navCtrl: NavController, public navParams: NavParams) {
      this.title='';
      this.location='';
      this.price=' ';
      this.description='';
      this.numbedroom=' ';
      this.numwashroom=' ';
      this.numshower=' ';
      this.carpark=' ';
      this.agent=' ';
      this.type='';
      this.user = JSON.parse(localStorage.getItem('userdata'));

      let headers = new Headers();
      this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/allagentsbrief', this.getagent, {headers: headers}).map(res => res.json()).subscribe(
        data => {
          this.agentform = data.data;
          console.log(this.agentform)
        }, (err) =>{
          console.log("error");
         });
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad SubmitHousePage');
    }
  
    onfileselected(event){
      this.selectedfile=event.target.files[0];
      console.log(event);
    }
    reupload(){
     
      const fd=new FormData();
      fd.append('image',this.selectedfile);
      fd.append('key','fj55518');
      fd.append('agent',this.agent);
      fd.append('owner',this.user.id);
      fd.append('type',this.type);
      fd.append('carpark',this.carpark);
      fd.append('numwashroom',this.numwashroom);
      fd.append('numshower',this.numshower);
      fd.append('numbedroom',this.numbedroom);
      fd.append('description',this.description);
      fd.append('bond',this.price);
      fd.append('price',this.price);
      fd.append('location',this.location);
      fd.append('title',this.title);

      let headers = new Headers();
      this.http.post('http://uninvested-stocks.000webhostapp.com/api/v1/addproperty', fd, {headers: headers}).map(res => res.json()).subscribe(
        
      data => {
          this.agentforms=data.data;
          console.log(this.agentforms.data);
          console.log(this.agentforms.code);
  
        }, (err) =>{
          console.log("error Cannot Upload the Image");
          swal({
            title: "Success",
            text: "Your property is now awaiting Approval",
            icon: "success",
          });
         });
    }
    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'Registration Successful. Your Property will be approved by an Agent Soon',
        duration: 3000,
        position: 'top'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }
    addagent()
    {
      console.log(this.slideOneForm.value);
    }
}
