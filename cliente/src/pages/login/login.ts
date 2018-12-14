import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any;
  token:any;
  userid:any;

  constructor(public services:ServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = {
      userName:"",
      password:""
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.services.login(this.user).subscribe
    (
      (result) =>{
        console.log(result);
        this.token = result;
        this.userid = this.token.user.id;
        this.services.generateCrud('post','users');
        localStorage.setItem('biblioteca',this.token.token)
        localStorage.setItem('biblioteca_user',this.token.user.id)
        this.navCtrl.setRoot(HomePage);
      }
    )
  }

}
