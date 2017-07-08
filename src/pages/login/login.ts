import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, MenuController} from 'ionic-angular';
import {BandejaPage} from "../bandeja/bandeja";

@Component({
    selector : 'page-login',
    templateUrl : 'login.html'
})

export class LoginPage{

    user = {"email":"", "password":""};
    constructor(
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public menu:MenuController
       ){
       this.menu.enable(false);
       }

    login = ():void=>{
        if(this.user.email !== "" && this.user.password !== ""){
           let loading = this.loadingCtrl.create({
               content:'Please wait...'
           });
           loading.present();
           setTimeout(()=>{
               loading.dismiss();
                this.navCtrl.setRoot(BandejaPage);
           }, 1000);

        }else{
            let alert = this.alertCtrl.create({
                title: 'Login',
                subTitle : 'Usuario y/o contraseña invalida',
                buttons:['Aceptar']
             });
             alert.present();
        }
    }

    signIn = ():void =>{
        alert("Sing in")
    }
}
