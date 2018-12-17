import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user:any;
  userfull:any;

  constructor(public services:ServicesProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.user = {
      id:localStorage.getItem('biblioteca_user'),
      userName:"",
      password:"",
      estatus:"",
      birth:"",
      gender:"",
      role_id:""

    }
    this.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  getUser(){
    this.services.getUser(this.user.id).subscribe(
      (result) =>{
        console.log(result);
      }
    )
  }
  

}
