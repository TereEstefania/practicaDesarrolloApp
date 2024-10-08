/**
 * @interface Actividad modelo de las actividades que tendran las listas y seran exportadas para ser utilizada
 * por el modelo de lista
 */

export class Actividad {
    descripcion: string;
    completado: boolean;
    
    constructor(titulo: string) {
    this.descripcion = titulo;
    this.completado = false;
    }
}