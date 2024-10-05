import { Component } from '@angular/core';
import { AlertController, ToastController} from '@ionic/angular';
import { ListaService } from '../services/lista.service';
import { Lista } from '../models/lista.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(

    public listaService: ListaService
  ) {}

  /**
   * @function AgregarLista
   * @description La funcion será ejecutada cuando el usuario haga click en el botón Agregar
   * Muestra una alerta donde solicita el nombre de la lista
   */

  async AgregarLista() {
    let alerta = await this.listaService.alertController.create({
      header: "Agregar lista",
      inputs: [
        {
          type: "text",
          name: "titulo",
          placeholder: "Ingresar nombre de la lista"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Crear",
          handler: (data:any)=> {
            let esValido: boolean = this.listaService.validarInput(data);
            if (esValido){
              let creadaOk = this.listaService.crearLista(data.titulo);

              if(creadaOk) { //Se verifica si la variable tiene un valor, es decir, que fue creada
                this.listaService.presentToast('Lista creada correctamente!');
              }
            }
          }
        }
      ]
    })
    await alerta.present();
    console.log('Hola Mundo!');
  }
   



   
   
}
