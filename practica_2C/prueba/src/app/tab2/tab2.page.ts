import { Component } from '@angular/core';
import { Proveedor1Service } from '../service/proveedor1.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usuarios: any = [];
  constructor(
    public proveedor: Proveedor1Service,
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

    /*await alert.present();*/
    await this.ionViewDidLoad();
  }

  ionViewDidLoad(){
      this.proveedor.obtenerDatos()
      .subscribe(
        (data)=>{this.usuarios = data;},
        (error)=> { console.log(error);}
      )

      
    }
}
