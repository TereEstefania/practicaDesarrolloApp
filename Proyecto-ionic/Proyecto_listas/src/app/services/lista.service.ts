import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ListaService {

  public listas: Lista[] = []; // almacena las listas de actividades
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
  ) { }

  /**
   * @function crearLista esta funcion recibe un nombre de lista y crea un objeto lista y este se guarda en un array
   * @param nombreLista 
   * @returns esta funcion retorna un obeto lista
   */
  crearLista(nombreLista: string) {
    let ObjetoLista =  new Lista(nombreLista)

    this.listas.push(ObjetoLista); //ingresamos en el array de listas el objeto con los datos creados
    this.guardarStorage();

    return ObjetoLista.titulo;
  }
  
  /**
   * @function guardarStorage funcion que recibe un nombre y un contenido para luego guardarlo en el storage local
   */
  guardarStorage() {
    let stringListas: string = JSON.stringify(this.listas); //Convertimos el array de listas en texto plano
    localStorage.setItem('listas', stringListas); //Se debe ingresar dos parámetros, el primero un nombre y el segundo el contenido
  }
   
  /**
   * @function cargarStorage se encarga de contener los datos cargados
   * @returns el objeto lista que se encuentra en el storage local
   */
  cargarStorage() {
    const listaStorage = localStorage.getItem('listas'); //Se debe ingresar el parámetro con el nombre del objeto que queremos recuperar
    if(listaStorage === null) {
      return this.listas = []; //Si el Storage está vacío devolvemos el objeto listas vacío también
    }
    else
    {

    let objLista = JSON.parse(listaStorage); //Convierte el texto plano a objeto para poder ingresarlo
      return this.listas = objLista;
    }
  }

  /**
   * @function eliminarLista borra una lista pasada por argumento filtrada por su Id
   * @param lista recibe com argumento un valor de tipo lista
   */
  eliminarLista(lista: Lista) {
    let nuevoListado = this.listas.filter((listaItem)=> listaItem.id !== lista.id); //Guardamos todas las listas menos la lista a eliminar
   //filter devuelve un arreglo de listas
    this.listas = nuevoListado;
    this.guardarStorage();
  }

  /**
   * @function editarLista se le pasa por argumento una lista filtrada por Id a la cual se le puede editar, 
   * para luego ser guardada nuevamente con los nuevos cambios
   * @param lista recibe como argumento un objeto de tipo lista
   */
  editarLista(lista: Lista) {
    let listaEditar = this.listas.find((listaItem)=> listaItem.id == lista.id); //Guardamos todas las listas menos la lista a eliminar
   //find devuelve el primer valor que encuentra
    if(listaEditar) {
      listaEditar.titulo = lista.titulo;
    }
   
    this.guardarStorage();
    }

    /**
   * @function validarInput
   * @description La funcion sera la encargada de validar el valor del contenido que ingrese el usuario
   * @param { any } input parametro que recibe un argumento de tipo any
   * @returns  { boolean } retorno de un valor booleano validando la entrada de datos en el input
   */
    validarInput(input: any):boolean {
      if(input && input.titulo) {
        return true;
      }
      this.presentToast('Debe ingresar un valor');
        return false; 
    }
  
    /**
     * @function presentToast
     * @description esta funcion es la encargada de retornar un mensaje visible al usuario en caso que se ingrese un valor no esperado
     * @param { string } mensage recibe como argumento un valor de tipo string
     */
    async presentToast(mensage:string) {
      let toast = await this.toastController.create({
        message: mensage,
        duration: 2000
      });
  
      toast.present();
  
    }

    /**
     * @function obtenerLista se le pasa un id de lista y este retorna una lista
     * @param idLista 
     * @returns 
     */
    obtenerLista(idLista: string | number) {
      const id = Number(idLista); //Parseamos el dato a Number, por si viene de tipo string, de esta manera siempre trabajaremos con un Number
      let lista = this.listas.find((itemLista)=> itemLista.id == id);
      return lista;
     }
     
   
}
