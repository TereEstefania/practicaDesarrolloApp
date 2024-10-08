import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroLista',
  pure: false
})
export class FiltroListaPipe implements PipeTransform {

  /**
   * @function transform esta funcion clasifica las listas dependiendo el estado de las actividades
   * @param listas recibe un argumento de tipo lista
   * @param tipo recibe un argumeto de tipo string que contendra el estado de la lista
   * @returns 
   */
  transform(listas: Lista[], tipo: string){
    let lista:any[] = [];
    switch(tipo) {
      case 'por hacer':
        lista = listas.filter((itemLista)=> itemLista.completada == false && itemLista.item.filter((itemActividad)=> itemActividad.completado == true).length == 0);
      break;
      case 'haciendo':
        lista = listas.filter((itemLista)=> itemLista.completada == false && itemLista.item.filter((itemActividad)=> itemActividad.completado == true).length > 0);
      break;
      case 'terminado':
        lista = listas.filter((itemLista)=> itemLista.completada == true);
      break;
    }
    return lista;
   }

}
