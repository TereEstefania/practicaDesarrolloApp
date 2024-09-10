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
   
  ) {}

  
  async mostrarConsola(){
    
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
