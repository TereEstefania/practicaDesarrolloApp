import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listas: any =[];
  constructor(
    private alertController: AlertController
  ) {}

  async agregar(){
  const alert = await this.alertController.create({
    header: 'Nuevo elemento',
    inputs:[
      {
        type:'text',
        name: 'newList',
        placeholder: 'elemento'
      }
    ],
    buttons: [
      {
        text: 'Guardar',
        handler: (data) => {
            this.listas.push(data.newList);
            console.log(this.listas);
        }
      }
    ],
  });

   await alert.present();
   
  }
}
