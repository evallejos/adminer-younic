import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
//pages
import {BuscarMaquinaPage} from "../maquina/buscar/buscarMaquina";


//firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
   selector : 'bandeja-page',
   templateUrl :'bandeja.html'
 })

export class BandejaPage {

tickets: FirebaseListObservable<any[]>;

crearTicket:any;

  constructor(private navCtrl:NavController,private menu:MenuController,private af: AngularFireDatabase){
      this.tickets = af.list('/ticket');
      this.crearTicket = BuscarMaquinaPage;
      this.menu.enable(true);
  }

  verTicket(){
    this.navCtrl.push("ComentarioPage");
  }

}
