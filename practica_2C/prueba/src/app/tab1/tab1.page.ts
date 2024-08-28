import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private alertController: AlertController
  ) {}

  async mostrarConsola(){
    const alert = await this.alertController.create({
      header: 'Nuevo nombre',
      inputs:[
        {
          type:'text',
          name: 'newName',
          placeholder: 'nombre'
        }
      ],
      buttons: ['Guardar'],
    });

    await alert.present();
    console.log("1 2 3 probando");
  }

  
}
