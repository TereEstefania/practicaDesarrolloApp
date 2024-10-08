import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent  implements OnInit {

  @Input() tipo:string = '';// esto es para poder pasar el parametro del tab en el cual este posicionado el usuario

  constructor(
    public listaService: ListaService,
    private router: Router
  ) { }

  ngOnInit() {}

  /**
   * @function EditarLista  funcion que permite editar una lista
   * @param lista 
   */
  async EditarLista(lista: Lista) {
    let alerta = await this.listaService.alertController.create({
    header: "Editar lista",
      inputs: [
      {
        type: "text",
        name: "titulo",
        placeholder: "Ingresar nuevo nombre de la lista",
        value: lista.titulo
      }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Editar",
          handler: (data:any)=> {
            let esValido: boolean = this.listaService.validarInput(data);
              if (esValido){
              lista.titulo = data.titulo,
              this.listaService.editarLista(lista);
              this.listaService.presentToast('Lista editada correctamente!');
            }
          }
        }
      ]
    })
    await alerta.present();
  }

  /**
   * @function editarLista recibe una lista para luego llamar a la funcion ed
   * @param listaItem 
   */
  editarLista(listaItem: Lista){
    this.listaService.editarLista(listaItem);
    console.log("editar lista:", listaItem);
  }

  /**
   * @function eliminarLista llama a la funcion eliminarLista del servicio
   * @param listaItem 
   */
  eliminarLista(listaItem: Lista) {
    this.listaService.eliminarLista(listaItem);
    console.log("Eliminar lista:", listaItem);
  }

/**
 * @function listaSeleccionada permite acceder al detalle de la lista que el usuario quiera
 */
 listaSeleccionada(listaItem: Lista){
  const URL = '/agregar/' + listaItem.id
  this.router.navigateByUrl(URL);
 }
}
